import Link from 'next/link'

const BackButton = () => (
  <Link href="/">
    <span>
      BACK
      <style jsx>{`
      background-color: bisque;
      padding: 10px;
      cursor: pointer;
      ::before{
        background-image: url(/icons/back.svg);
        background-repeat: no-repeat;
        background-position: center center;
        width: 15px;
        height: 15px;
        content: "";
        display: inline-block;
        background-size: cover;
        margin: 0 8px 0 0px;
      }
      `}</style>
    </span>
  </Link>
)

export default BackButton