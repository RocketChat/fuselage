import { forwardRef, useState, useCallback, useRef, useEffect } from 'react';
import { Stack, Text, Button, XStack, YStack } from 'tamagui';
import { Label } from '../Label';

type SliderProps = {
  value?: number | [number, number];
  onChange?: (value: number | [number, number]) => void;
  defaultValue?: number | [number, number];
  minValue?: number;
  maxValue?: number;
  step?: number;
  label?: string;
  showOutput?: boolean;
  multiThumb?: boolean;
  orientation?: 'horizontal' | 'vertical';
  disabled?: boolean;
  formatOptions?: Intl.NumberFormatOptions;
  'aria-label'?: string;
};

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  function Slider(
    {
      value,
      onChange,
      defaultValue,
      minValue = 0,
      maxValue = 100,
      step = 1,
      label,
      showOutput = true,
      multiThumb = false,
      orientation = 'horizontal',
      disabled = false,
      formatOptions,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) {
    const [internalValue, setInternalValue] = useState<number | [number, number]>(() => {
      if (value !== undefined) return value;
      if (defaultValue !== undefined) return defaultValue;
      if (multiThumb) return [minValue, maxValue];
      return minValue;
    });

    const trackRef = useRef<HTMLDivElement>(null);
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const numberFormatter = new Intl.NumberFormat(undefined, formatOptions);

    const formatValue = useCallback((val: number) => {
      return formatOptions ? numberFormatter.format(val) : val.toString();
    }, [formatOptions, numberFormatter]);

    const getThumbPosition = useCallback((val: number) => {
      return ((val - minValue) / (maxValue - minValue)) * 100;
    }, [minValue, maxValue]);

    const getValueFromPosition = useCallback((position: number) => {
      const percentage = Math.max(0, Math.min(100, position));
      const rawValue = (percentage / 100) * (maxValue - minValue) + minValue;
      return Math.round(rawValue / step) * step;
    }, [minValue, maxValue, step]);

    const handleTrackClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;

      const rect = trackRef.current?.getBoundingClientRect();
      if (!rect) return;

      const isVertical = orientation === 'vertical';
      const clientPos = isVertical ? event.clientY : event.clientX;
      const trackPos = isVertical ? rect.top : rect.left;
      const trackSize = isVertical ? rect.height : rect.width;
      
      const position = ((clientPos - trackPos) / trackSize) * 100;
      const newValue = getValueFromPosition(position);

      if (multiThumb) {
        const [min, max] = currentValue as [number, number];
        const newMin = Math.abs(newValue - min) < Math.abs(newValue - max) ? newValue : min;
        const newMax = Math.abs(newValue - min) < Math.abs(newValue - max) ? max : newValue;
        const newRange: [number, number] = [Math.min(newMin, newMax), Math.max(newMin, newMax)];
        
        if (!isControlled) setInternalValue(newRange);
        onChange?.(newRange);
      } else {
        if (!isControlled) setInternalValue(newValue);
        onChange?.(newValue);
      }
    }, [disabled, orientation, getValueFromPosition, multiThumb, currentValue, isControlled, onChange]);

    // Mouse drag (desktop fallback)
    const handleThumbDrag = useCallback((index: number, startEvent: React.MouseEvent) => {
      if (disabled) return;

      const startPos = orientation === 'vertical' ? startEvent.clientY : startEvent.clientX;
      const startValue = multiThumb ? (currentValue as [number, number])[index] : currentValue as number;

      const handleMouseMove = (event: MouseEvent) => {
        const currentPos = orientation === 'vertical' ? event.clientY : event.clientX;
        const delta = currentPos - startPos;
        const rect = trackRef.current?.getBoundingClientRect();
        if (!rect) return;

        const trackSize = orientation === 'vertical' ? rect.height : rect.width;
        const deltaPercentage = (delta / trackSize) * 100;
        const startPercentage = getThumbPosition(startValue);
        const newPercentage = Math.max(0, Math.min(100, startPercentage + deltaPercentage));
        const newValue = getValueFromPosition(newPercentage);

        if (multiThumb) {
          const [min, max] = currentValue as [number, number];
          const newRange: [number, number] = [...(currentValue as [number, number])] as [number, number];
          newRange[index] = newValue;
          
          // Ensure min thumb doesn't go beyond max thumb and vice versa
          if (index === 0 && newValue > newRange[1]) newRange[0] = newRange[1];
          if (index === 1 && newValue < newRange[0]) newRange[1] = newRange[0];
          
          if (!isControlled) setInternalValue(newRange);
          onChange?.(newRange);
        } else {
          if (!isControlled) setInternalValue(newValue);
          onChange?.(newValue);
        }
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }, [disabled, orientation, multiThumb, currentValue, isControlled, onChange, getThumbPosition, getValueFromPosition]);

    // Pointer drag (covers mouse + touch + pen)
    const handleThumbPointerDown = useCallback((index: number, startEvent: React.PointerEvent) => {
      if (disabled) return;

      // capture pointer so we still receive move/end when leaving element
      try {
        (startEvent.currentTarget as any).setPointerCapture?.(startEvent.pointerId);
      } catch {}

      const startPos = orientation === 'vertical' ? startEvent.clientY : startEvent.clientX;
      const startValue = multiThumb ? (currentValue as [number, number])[index] : (currentValue as number);

      const handlePointerMove = (event: PointerEvent) => {
        const currentPos = orientation === 'vertical' ? event.clientY : event.clientX;
        const delta = currentPos - startPos;
        const rect = trackRef.current?.getBoundingClientRect();
        if (!rect) return;

        const trackSize = orientation === 'vertical' ? rect.height : rect.width;
        const deltaPercentage = (delta / trackSize) * 100;
        const startPercentage = getThumbPosition(startValue);
        const newPercentage = Math.max(0, Math.min(100, startPercentage + deltaPercentage));
        const newValue = getValueFromPosition(newPercentage);

        if (multiThumb) {
          const newRange: [number, number] = [...(currentValue as [number, number])] as [number, number];
          newRange[index] = newValue;
          if (index === 0 && newValue > newRange[1]) newRange[0] = newRange[1];
          if (index === 1 && newValue < newRange[0]) newRange[1] = newRange[0];
          if (!isControlled) setInternalValue(newRange);
          onChange?.(newRange);
        } else {
          if (!isControlled) setInternalValue(newValue);
          onChange?.(newValue);
        }
      };

      const handlePointerUp = () => {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
      };

      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }, [disabled, orientation, multiThumb, currentValue, isControlled, onChange, getThumbPosition, getValueFromPosition]);

    // Keyboard support on thumbs
    const handleThumbKeyDown = useCallback((index: number, e: React.KeyboardEvent) => {
      if (disabled) return;
      const isVert = orientation === 'vertical';
      const incKeys = new Set(['ArrowRight', 'ArrowUp']);
      const decKeys = new Set(['ArrowLeft', 'ArrowDown']);
      let delta = 0;
      if ((isVert && e.key === 'ArrowUp') || (!isVert && e.key === 'ArrowRight')) delta = step;
      if ((isVert && e.key === 'ArrowDown') || (!isVert && e.key === 'ArrowLeft')) delta = -step;
      if (e.key === 'PageUp') delta = step * 10;
      if (e.key === 'PageDown') delta = -step * 10;

      const clamp = (val: number) => Math.min(maxValue, Math.max(minValue, val));

      if (delta !== 0) {
        e.preventDefault();
        if (multiThumb) {
          const range = [...(currentValue as [number, number])] as [number, number];
          range[index] = clamp((range[index] ?? 0) + delta);
          // keep order
          if (range[0] > range[1]) {
            if (index === 0) range[0] = range[1];
            else range[1] = range[0];
          }
          if (!isControlled) setInternalValue(range);
          onChange?.(range);
        } else {
          const next = clamp((currentValue as number) + delta);
          if (!isControlled) setInternalValue(next);
          onChange?.(next);
        }
      }

      if (e.key === 'Home') {
        e.preventDefault();
        if (multiThumb) {
          const range = [...(currentValue as [number, number])] as [number, number];
          range[index] = minValue;
          if (!isControlled) setInternalValue(range);
          onChange?.(range);
        } else {
          if (!isControlled) setInternalValue(minValue);
          onChange?.(minValue);
        }
      }
      if (e.key === 'End') {
        e.preventDefault();
        if (multiThumb) {
          const range = [...(currentValue as [number, number])] as [number, number];
          range[index] = maxValue;
          if (!isControlled) setInternalValue(range);
          onChange?.(range);
        } else {
          if (!isControlled) setInternalValue(maxValue);
          onChange?.(maxValue);
        }
      }
    }, [disabled, orientation, step, multiThumb, currentValue, isControlled, onChange, minValue, maxValue]);

    const renderThumb = useCallback((index: number, thumbValue: number) => (
      <Button
        key={index}
        position="absolute"
        width={12}
        height={12}
        borderRadius={6}
        backgroundColor={disabled ? '$colors-n400' : '$colors-p500'}
        borderWidth={0}
        onMouseDown={(e) => handleThumbDrag(index, e)}
        onPointerDown={(e) => handleThumbPointerDown(index, e)}
        style={{
          [orientation === 'vertical' ? 'top' : 'left']: `${getThumbPosition(thumbValue)}%`,
          transform: orientation === 'vertical' 
            ? 'translateY(-50%)' 
            : 'translateX(-50%)',
        }}
        disabled={disabled}
        aria-label={`${ariaLabel || 'slider'} thumb ${index + 1}`}
        role="slider"
        aria-valuemin={minValue}
        aria-valuemax={maxValue}
        aria-valuenow={thumbValue}
        tabIndex={0}
        onKeyDown={(e) => handleThumbKeyDown(index, e)}
      />
    ), [orientation, getThumbPosition, handleThumbDrag, handleThumbPointerDown, handleThumbKeyDown, disabled, ariaLabel, minValue, maxValue]);

    const renderOutput = useCallback(() => {
      if (!showOutput) return null;

      if (multiThumb) {
        const [min, max] = currentValue as [number, number];
        return (
          <Text color="$colors-n600" fontSize="$2">
            {`${formatValue(min)} - ${formatValue(max)}`}
          </Text>
        );
      }

      return (
        <Text color="$colors-n600" fontSize="$2">
          {formatValue(currentValue as number)}
        </Text>
      );
    }, [showOutput, multiThumb, currentValue, formatValue]);

    const isVertical = orientation === 'vertical';

    return (
      <Stack
        ref={ref}
        width={isVertical ? 30 : '100%'}
        height={isVertical ? '100%' : 30}
        position="relative"
        {...props}
      >
        {(label || showOutput) && (
          <XStack
            justifyContent="space-between"
            alignItems="center"
            marginBottom={isVertical ? 0 : '$2'}
            marginRight={isVertical ? '$2' : 0}
            flexDirection={isVertical ? 'column' : 'row'}
          >
            {label && (
              <Label color="$colors-n900" fontSize="$3">
                {label}
              </Label>
            )}
            {renderOutput()}
          </XStack>
        )}

        <Stack
          ref={trackRef}
          position="relative"
          width={isVertical ? 6 : '100%'}
          height={isVertical ? '100%' : 6}
          backgroundColor="#E4E7EA"
          borderRadius="$2"
          cursor={disabled ? 'not-allowed' : 'pointer'}
          opacity={disabled ? 0.4 : 1}
          onMouseDown={handleTrackClick}
          onPointerDown={(e) => handleTrackClick(e as any)}
        >
          {/* filled bar */}
          {(() => {
            const start = multiThumb ? getThumbPosition((currentValue as [number, number])[0]) : 0;
            const end = multiThumb ? getThumbPosition((currentValue as [number, number])[1]) : getThumbPosition(currentValue as number);
            const size = Math.max(0, end - start);
            if (isVertical) {
              return (
                <Stack
                  position="absolute"
                  left={0}
                  right={0}
                  bottom={`${start}%`}
                  height={`${Math.max(0, end - start)}%`}
                  backgroundColor="#156FF5"
                  borderRadius="$2"
                />
              );
            }
            return (
              <Stack
                position="absolute"
                top={0}
                bottom={0}
                left={`${start}%`}
                width={`${size}%`}
                backgroundColor="#156FF5"
                borderRadius="$2"
              />
            );
          })()}
          {multiThumb ? (
            <>
              {renderThumb(0, (currentValue as [number, number])[0])}
              {renderThumb(1, (currentValue as [number, number])[1])}
            </>
          ) : (
            renderThumb(0, currentValue as number)
          )}
        </Stack>
      </Stack>
    );
  }
);

Slider.displayName = 'Slider';

export default Slider;

