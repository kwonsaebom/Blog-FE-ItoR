import React from 'react'

import Button from '@components/Button'

export default function Example() {
  return (
    <>
      <Button
        onClick={() => alert('버튼')}
        width='145px'
        height='40px'
        fontSize='14px'
        color='--var(--color-point)'
        backgroundColor='--var(--color-black)'
      >
        깃로그 시작하기
      </Button>
    </>
  )
}
