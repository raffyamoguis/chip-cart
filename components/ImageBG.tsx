import React from 'react'
import { BackgroundImage,Space } from '@mantine/core'

interface Props {
    imgsource: string;
    space: number;
    children: React.ReactNode;
    mt?: number;
}

const ImageBG:React.FC<Props> = ({imgsource, space, children, mt}) => {
  return (
    <BackgroundImage mt={mt} src={imgsource}>
        <Space h={space} />
        {children}
        <Space  h={space}/>
    </BackgroundImage>
  )
}

export default ImageBG