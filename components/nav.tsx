import styles from "../styles/Nav.module.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <div
                className={
                    styles.navToggler
                }
            >
                <Link href="/">
                    <a
                        className={
                            styles.navLink
                        }
                    >
                        Lessons
                    </a>
                </Link>
                <Link href="/create">
                    <a
                        className={
                            styles.navLink
                        }
                    >
                        Create
                    </a>
                </Link>
            </div>
        </nav>
    );
}
