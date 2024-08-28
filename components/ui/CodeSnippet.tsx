import codeSnippet from '../../public/images/codeSnippet.jpeg';
import Image from "next/image";
import { Compare } from './codeComparison';
import badCode from '../../public/images/Bad code.jpeg';
import goodCode from '../../public/images/Good code.jpeg';

export default function CodeSnippet() {
    return (
      <main className="w-full h-full rounded-xl flex justify-end items-center">
        {/* <Image
          src={codeSnippet}
          alt="Code Snippet"
          className="object-contain rounded-xl"
        /> */}
        <Compare
        firstImage= '/images/Good code.jpeg'
        secondImage= '/images/Bad code.jpeg'
        firstImageClassName="object-fit object-left-top"
        secondImageClassname="object-fit object-left-top"
        className="h-full w-full"
        slideMode="hover"
      />
      </main>
    );
  }