import { DeleteOutlined, StarFilled } from '@ant-design/icons'
import { Button, Card, Rate } from 'antd'
import React from 'react'

const ReviewCard = ({reviews, isAdmin = false}) => {
  return (
    <>
        <Card className='mb-4'>
            <div className='flex justify-between'>
                <div class="flex items-center my-3">
                    <img class="w-10 h-10 me-4 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFJnwOdZCFgJa__N0Cl8EUdQUEZpshe-Npg&s" alt=""/>

                    <div class="font-medium dark:text-white">
                        <p> {reviews.user} </p>
                        <p class="mt-1 text-xs text-gray-500 dark:text-gray-400"> {reviews.date}</p>

                        <div className="items-center mt-3">
                        <Rate
                            disabled
                            defaultValue={reviews.rating}
                            allowHalf
                            character={<StarFilled />}
                            className="text-yellow-500"
                        />
                        </div>
                    </div>
                </div>
                <div>
                    {isAdmin && (
                    <Button style={{outline:"none", border:"none"}}>
                            <DeleteOutlined style={{color:'#FF4D4F'}}/>
                    </Button>
                   )}
                </div>
            </div>
            <p class="mb-3 text-gray-500 dark:text-gray-400"> {reviews.body} </p>
        </Card>

      
    </>
  )
}

export default ReviewCard
