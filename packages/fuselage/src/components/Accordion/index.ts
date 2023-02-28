import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

const CompoundedAccordion = Object.assign(Accordion.bind(null), {
  Item: AccordionItem,
});

export { CompoundedAccordion, Accordion, AccordionItem };
