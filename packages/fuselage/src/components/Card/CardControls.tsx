import { useBreakpoints } from '@rocket.chat/fuselage-hooks';
import Box from '../Box/Box';

const CardControls = ({...props }) => {
  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('sm');
  return (
    <Box
      rcx-card__controls
      rcx-card__controls--wrap={isMobile}
      {...props}
    />
  )
}

export default CardControls;
