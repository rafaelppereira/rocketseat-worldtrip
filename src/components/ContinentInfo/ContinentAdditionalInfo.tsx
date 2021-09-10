import {
  useBreakpointValue,
  Tooltip,
  Icon,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri'

interface ContinentAdditionalInfoProps {
  informationBody: string;
}

export function ContinentAdditionalInfo({
  informationBody,
}: ContinentAdditionalInfoProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  if (isWideVersion) {
    return (
      <Tooltip hasArrow label={informationBody} fontSize='md' >
        <span><Icon opacity='50%' fontSize='md' as={RiInformationLine} /></span>
      </Tooltip>
    )
  };
  return (
    <Popover matchWidth>
      <PopoverTrigger>
        <span><Icon opacity='50%' fontSize='md' as={RiInformationLine} /></span>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>{informationBody}</PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}