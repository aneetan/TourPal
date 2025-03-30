import { AimOutlined, CalendarOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import React from 'react';

const BookingsCard = ({ booking, status, guide}) => {
  const { destination, date, message, user, img } = booking;
  const isAccepted = status === 'approved';
  const isPending = status === 'pending';

  return (
    <div className="mt-6 w-full sm:w-[50%] lg:w-[70%] xl:w-[100%] rounded-2xl shadow-lg bg-[#FFEBD6] hover:shadow-xl transition-shadow duration-300">
      <div className="glass-card rounded-2xl overflow-hidden card-hover">
        <div className="px-4 sm:px-6 py-4 sm:py-6">
          {/* User Section */}
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="rounded-full bg-primary/5 flex items-center justify-center">
                <img
                  className='w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover'
                  src={img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXaqAPWqkiEqlZ1e0WyGQig_9nOAuSPvvMw&s'} // Fallback image
                  alt={user}
                />
              </div>
              <div>
                <h3 className="font-medium text-xs sm:text-sm">{user}</h3>

              </div>
            </div>
          </div>
          
          {/* Booking Details */}
          <div className="space-y-2 sm:space-y-3">
            {/* Destination */}
            <div className="flex items-start gap-2">
              <UserOutlined className="w-3 h-3 sm:w-4 sm:h-4 text-primary/70 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-medium">Guide</span>
                <p className="text-xs sm:text-sm line-clamp-1">{guide}</p>
              </div>
            </div>

            {/* Destination */}
            <div className="flex items-start gap-2">
              <AimOutlined className="w-3 h-3 sm:w-4 sm:h-4 text-primary/70 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-medium">Destination</span>
                <p className="text-xs sm:text-sm line-clamp-1">{destination}</p>
              </div>
            </div>
            
            {/* Date */}
            <div className="flex items-start gap-2">
              <CalendarOutlined className="w-3 h-3 sm:w-4 sm:h-4 text-primary/70 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs sm:text-sm font-medium">Date </span>
                <p className="text-xs sm:text-sm">
                {dayjs(date).format('YYYY-MM-DD')}
                </p>
              </div>
            </div>
            
            {/* Message */}
            <div className="flex gap-2 mt-2 sm:mt-3">
              <MailOutlined className="w-3 h-3 sm:w-4 sm:h-4 text-primary/70 mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm">
                {message}
              </p>
            </div>

            {/* Status */}
            <div 
              className={`text-xs sm:text-sm font-semibold
                ${isAccepted ? 'text-green-600' : (isPending ? 'text-blue-400' : 'text-red-600')}
               `}
            >
              Status: {isAccepted ? 'Accepted' :  (isPending? 'Pending' : 'Declined')}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BookingsCard;