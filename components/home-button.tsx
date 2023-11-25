import Image from "next/image";
import Link from "next/link";
import icon from "../public/LF_offset.svg";
import hoverIcon from "../public/LF_reversed_shadows.svg";

export default function HomeButton() {
  return (
    // <Button
    //   asChild
    //   className="transition group p-0 w-9 h-9 flex justify-center items-center"
    // >
    <div className="transition group p-0 w-9 h-9 flex justify-center items-center">
      <Link href="/">
        <Image
          src={icon}
          width={32}
          height={32}
          alt="Home"
          className="group-hover:hidden"
        />
        <Image
          src={hoverIcon}
          width={32}
          height={32}
          alt="Home"
          className="hidden group-hover:block"
        />
      </Link>
    </div>
    // </Button>
  );
}
