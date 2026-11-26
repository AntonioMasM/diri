type ActivityItemProps = {
    name: string;
    time: string;
    text: string;
}

function ActivityItem({ name, time, text }: ActivityItemProps) {
    const imageSrc = `/images/${name.toLowerCase()}.jpg`;
    return (
        <div className="item">
            <div className="avatar">
                <img alt={name} src={imageSrc} />
            </div>
            <span className="time">{time}</span>
            <p>{text}</p>
        </div>
    );
}

export default ActivityItem;