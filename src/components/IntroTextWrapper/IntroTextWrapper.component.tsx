import {FC} from 'react';

export const IntroTextWrapper: FC<{}> = ({}) => {
    return (
        <div className="intro-text-wrapper" style={{ willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
        <div className="intro-text-line" style={{ opacity: 1 }}>
          <h1 className="text-3xl font-bold underline">SURYA</h1>
          <h1 className="intro-text-word text-super">PRASAD</h1>
        </div>
        <div className="intro-text-line" style={{ opacity: 1 }}>
          <h1 className="intro-text-word text-super">DESIGN</h1>
          <h1 className="intro-text-word text-super">&amp;</h1>
        </div>
        <div className="intro-text-line" style={{ opacity: 1 }}>
          <h1 className="intro-text-word text-super">ART</h1>
          <h1 className="intro-text-word text-super">DIRECTION</h1>
        </div>
        <div data-w-id="6ad2cbfd-f58d-54ce-4140-9e311e384e4f" className="intro-text-line" style={{ opacity: 1 }}>
            <a data-w-id="93a360ef-5e9c-01c2-e05a-1ad3191b136a" href="tel:+447533063596" className="intro-link_call w-inline-block">
                <h1 className="intro-text-word text-super">
                    <span data-w-id="2316e8fc-324c-47f7-cc43-f4f4c332ff07" className="intro-text-span" style={{ transform: 'translate3d(0em, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>+</span>
                    <span data-w-id="cef6806d-730a-6067-b454-82f7ef6768b6" className="intro-text-span" style={{ transform: 'translate3d(0em, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>4</span>
                </h1>
            </a>
        </div>
    </div>
    );
};