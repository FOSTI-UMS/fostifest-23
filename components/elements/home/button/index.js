import Link from "next/link";

export default function ButtonComponent({ text, buttonType, buttonColorType, href, onClick }) {
  return (
    <Link className={`text-decoration-none text-light fw-bold d-flex justify-content-center align-items-center ${buttonType} ${buttonColorType}`} href={`${href}`} onClick={onClick}>
      {text}
    </Link>
  );
}
