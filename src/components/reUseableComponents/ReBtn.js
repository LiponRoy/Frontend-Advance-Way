import { Button } from 'antd';
import React from 'react'

const ReBtn = ({children,className,onclick}) => {
  return (
    <Button className={className?className:' bg-slate-500'} onClick={onclick}>{children}</Button>
  )
}

export default ReBtn
