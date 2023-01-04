import {FC} from 'react';

const countryCode = [
    {
        digit: "+",
        cssClass: "plus"
    },
    {
        digit: "4",
        cssClass: "code-1"
    },
    {
        digit: "4\t",
        cssClass: "code-2"
    },
    {
        digit: "7",
        cssClass: "phone-1"
    },
    {
        digit: "4",
        cssClass: "phone-2"
    },
    {
        digit: "8",
        cssClass: "phone-3"
    },
    {
        digit: "3\t",
        cssClass: "phone-4"
    },
    {
        digit: "8",
        cssClass: "phone-5"
    },
    {
        digit: "8",
        cssClass: "phone-6"
    },
    {
        digit: "9\t",
        cssClass: "phone-7"
    },
    {
        digit: "6",
        cssClass: "phone-8"
    },
    {
        digit: "2",
        cssClass: "phone-9"
    },
    {
        digit: "9",
        cssClass: "phone-10"
    },
]

export const IntroTextWrapper: FC<{}> = ({}) => {
    return (
        <div className="flex flex-col text-7xl" style={{ willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
        <div className="flex justify-between">
          <h1 className="text-[#9945FF]">SURYA</h1>
          <h1 className="text-[#14F195]">PRASAD</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="intro-text-word text-super">SWE</h1>
          <h1 className="intro-text-word text-super">&amp;</h1>
        </div>
        <div className="flex justify-between">
          {
            ["E", "N", "T", "R", "E", "P", "R", "E", "N", "E", "U", "R"].map((item, key) => {
                return (
                    <h1 key={key}>{item}</h1>
                )
            })
          }
        </div>
        <div>
            <a href="tel:+447483889629">
                <h1 id="country-code">
                    {countryCode.map((item, key) => {
                        return (
                            <span id='digit' key={key} className={item.cssClass} >{item.digit}</span>
                        )
                    })}
                </h1>
            </a>
        </div>
        <div className="flex flex-row justify-between">
            <a href="mailto:surya_07@live.in">
                <h1 id="country-code">
                    {["→", "E", "M", "A", "I", "L"].map((item, key) => {
                        return (
                            <span id='digit' key={key} className={`phone-${key + 2} text-[#14F195]`} >{item}</span>
                        )
                    })}
                </h1>
            </a>
            <a href="https://instagram.com/kaffeine_shot" target="_blank">
                <h1 id="country-code">
                    {["→", "I", "N", "S", "T", "A"].map((item, key) => {
                        return (
                            <span id='digit' key={key} className={`phone-${key + 4} text-[#9945FF]`} >{item}</span>
                        )
                    })}
                </h1>
            </a>
        </div>
    </div>
    );
};