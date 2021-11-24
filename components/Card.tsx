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
            <h6
                className={
                    styles.lessonNum
                }
            >
                Lesson {props.lessonNum}
            </h6>
            <h6
                className={
                    styles.lessonTitle
                }
            >
                Title:{" "}
                <span
                    className={
                        styles.lessonTitleSpan
                    }
                >
                    {props.lessonTitle}
                </span>
            </h6>
            <h6
                className={
                    styles.lessonDesc
                }
            >
                Description:
            </h6>
            <p
                className={
                    styles.lessonDescription
                }
            >
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
                layout="responsive"
            />
        </div>
    );
}

export default Card;
