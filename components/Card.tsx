import styles from "../styles/Card.module.css";
import { CardProps } from "../types/props";
import Image from "next/image";

function Card(props: CardProps) {
    return (
        <div
            className={
                styles["card-container"]
            }
        >
            <p>
                Lesson {props.lessonNum}
            </p>
            <p>
                Title:{" "}
                {props.lessonTitle}
            </p>
            <p>
                Description: <br />
                <br />
                {props.lessonDesc}
            </p>
            <Image
                className={
                    styles["card-image"]
                }
                src={"/rocket.jpg"}
                alt="Rocket League"
                width={256}
                height={144}
            />
        </div>
    );
}

export default Card;
