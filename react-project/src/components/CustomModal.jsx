import { Modal } from 'antd'
import React from 'react'

const CustomModal = ({title, handleOk, content, handleCancel, isOpen, text}) => {
  return (
    <>
      <Modal
        title={title}
        style={{
          top: 20,
        }}
        open= {isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={text}
        cancelText="Cancel"
      >
        <p>{content}</p>
      </Modal>
    </>
  )
}

export default CustomModal
