import { useEffect, useState } from "react";
import "./NotificationsView.css";

// View с временем и датой
function NotificationsView({ notifications }) {
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextItem = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentNotificationIndex(
        (prevIndex) => (prevIndex + 1) % notifications.length
      );
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const intervalId = setInterval(nextItem, 10000);
    return () => clearInterval(intervalId);
  }, [notifications.length]);

  return (
    <div className="carouselContainer">
      {notifications.map((item, index) => (
        <div
          key={index}
          className={`carouselItem ${
            index === currentNotificationIndex ? "active" : ""
          } ${
            isAnimating && index === currentNotificationIndex ? "animate" : ""
          }`}
          style={{ zIndex: index === currentNotificationIndex ? 2 : 1 }}
        >
          <div className="notificationContainer">
            <p className="notificationTitle">{item.title}</p>
            <p className="notificationDescription">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotificationsView;
