import { Emitter } from "@rocket.chat/emitter";

// Simple draggable element implementation
class DraggableElement extends Emitter<{
  dragStart: DOMRect;
  dragEnd: DOMRect;
}> {
  private element: HTMLElement;
  private isDragging: boolean = false;
  private offsetX: number = 0;
  private offsetY: number = 0;
  private currentTransform: {
    x: number;
    y: number;
  } = {
    x: 0,
    y: 0
  };

  constructor(element: HTMLElement) {
    super();
    this.element = element;
    this.init();
  }

  private init(): void {
    this.setOffset(0, 0);
    this.element.addEventListener('mousedown', this.onDragStart.bind(this));
    document.addEventListener('mousemove', this.onDragMove.bind(this));
    document.addEventListener('mouseup', this.onDragEnd.bind(this));
  }

  private onDragStart(e: MouseEvent): void {
    this.isDragging = true;
    const rect = this.element.getBoundingClientRect();
    this.setMouseOffset(e.clientX, e.clientY);
    this.emit('dragStart', rect);
  }

  private onDragMove(e: MouseEvent): void {
    if (!this.isDragging) return;
    
    const x = e.clientX - this.offsetX;
    const y = e.clientY - this.offsetY;

    this.addTransformOffset(x, y);
    this.setMouseOffset(e.clientX, e.clientY);
  }

  private onDragEnd(): void {
    this.isDragging = false;
    const rect = this.element.getBoundingClientRect();
    this.emit('dragEnd', rect);
    this.setMouseOffset(0, 0);
  }

  private setOffset(x: number, y: number): void {
    this.currentTransform.x = x;
    this.currentTransform.y = y;

    this.element.style.transform = `translate(${this.currentTransform.x}px, ${this.currentTransform.y}px)`;
  }

  private setMouseOffset(x: number, y: number): void {
    this.offsetX = x;
    this.offsetY = y;
  }

  addTransformOffset(x: number, y: number): void {
    this.setOffset(this.currentTransform.x + x, this.currentTransform.y + y);
  }

  getBoundingClientRect(): DOMRect {
    return this.element.getBoundingClientRect();
  }
}

class BoundingElement extends Emitter<{
  resize: [width: number, height: number];
}> {
  private element: HTMLElement;
  private bounds: DOMRect;
  private timeout: NodeJS.Timeout | null = null;
  private observer: ResizeObserver;

  constructor(element: HTMLElement) {
    super();
    this.element = element;
    this.bounds = element.getBoundingClientRect();

    this.observer = new ResizeObserver(this.onResizeBoundindElement.bind(this));
    this.observer.observe(this.element);
  }

  unmount(): void {
    this.observer.disconnect();
  }

  updateBounds(rect: DOMRect): void {
    this.bounds = rect;
  }

  getBounds(): DOMRect {
    return this.bounds;
  }

  onResizeBoundindElement(): void {
    if (this.timeout) {
        clearTimeout(this.timeout);
    }
    
    this.timeout = setTimeout(() => {
        const rect = this.element.getBoundingClientRect();
        const delta = this.getResizedBoundsDelta(rect);
        this.updateBounds(rect);
        this.emit('resize', delta);
    }, 250);
  }

  /**
   * Get the resized bounds delta as a percentage of the last commited bounds
   * e.g. if the last commited bounds were 100x100 and the current bounds are 110x110, the delta will be 0.1, 0.1
   * @returns [width: number, height: number]
   */
  getResizedBoundsDelta(newRect: DOMRect): [width: number, height: number] {
    // get bounds delta between last commited bounds and current bounds and convert to percentage
    const xDelta = (newRect.left - this.bounds.left) / this.bounds.width;
    const yDelta = (newRect.top - this.bounds.top) / this.bounds.height;
    return [xDelta, yDelta];
  }
}

class DraggableManager {
  private draggableElement: DraggableElement;
  private boundingElement: BoundingElement;

  constructor(boundingElement: HTMLElement, draggableElement: HTMLElement) {
    this.boundingElement = new BoundingElement(boundingElement);
    this.draggableElement = new DraggableElement(draggableElement);

    console.log('boundingElement', this.boundingElement.getBounds().width, this.boundingElement.getBounds().height);
    console.log('draggableElement', this.draggableElement.getBoundingClientRect().width, this.draggableElement.getBoundingClientRect().height);

    if (this.boundingElement.getBounds().width < this.draggableElement.getBoundingClientRect().width || this.boundingElement.getBounds().height < this.draggableElement.getBoundingClientRect().height) {
      throw new Error('Bounding element is too small');
    }

    this.boundingElement.on('resize', () => {
        this.bindDraggableElement(this.draggableElement, this.boundingElement);
    });

    this.draggableElement.on('dragEnd', (rect) => {
        // console.log('dragEnd', rect);

        this.bindDraggableElement(this.draggableElement, this.boundingElement);
    })
  }

  bindDraggableElement(draggableElement: DraggableElement, boundingElement: BoundingElement): void {
      const rect = draggableElement.getBoundingClientRect();
      const bounds = boundingElement.getBounds();
      
        // If the draggable element's top/left position is less than
        // the bounding element's top/left position, the difference will be positive
        // This means we can just add this value to the draggable element's offset
        // to bring it back into bounds
      const topLeftPoint = {
        x: bounds.left - rect.left,
        y: bounds.top - rect.top
      };

      // If the draggable element's bottom/right position is greater than
      // the bounding element's bottom/right position, the difference will be negative
      // This means we can just add this value to the draggable element's offset
      // to bring it back into bounds
      const bottomRightPoint = {
        x: bounds.right - rect.right,
        y: bounds.bottom - rect.bottom
      };

    //   console.log('topLeftPoint', topLeftPoint);
    //   console.log('bottomRightPoint', bottomRightPoint);

      if (topLeftPoint.x > 0) {
        this.draggableElement.addTransformOffset(topLeftPoint.x, 0);
      }
      if (topLeftPoint.y > 0) {
        this.draggableElement.addTransformOffset(0, topLeftPoint.y);
      }
      if (bottomRightPoint.x < 0) {
        this.draggableElement.addTransformOffset(bottomRightPoint.x, 0);
      }
      if (bottomRightPoint.y < 0) {
        this.draggableElement.addTransformOffset(0, bottomRightPoint.y);
      }
  }
}

// Create a draggable element when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return;

  // Create a draggable box
  const box = document.createElement('div');
//   box.style.width = '100px';
//   box.style.height = '100px';
//   box.style.backgroundColor = '#3498db';
//   box.style.borderRadius = '4px';
//   box.style.left = '0px';
//   box.style.top = '0px';

  const innerBox = document.createElement('div');
  innerBox.style.width = '100px';
  innerBox.style.height = '100px';
  innerBox.style.backgroundColor = '#2ecc71';
  innerBox.style.borderRadius = '4px';
  innerBox.style.left = '30px';
  innerBox.style.top = '30px';

//   box.appendChild(innerBox);
  app.appendChild(innerBox);

  new DraggableManager(document.body, innerBox);
  
  // Add some instructions
//   const instructions = document.createElement('p');
//   instructions.textContent = 'Drag the blue box around!';
//   instructions.style.marginTop = '20px';
//   app.appendChild(instructions);
});

// Export the DraggableElement class for external use
export { DraggableElement };
