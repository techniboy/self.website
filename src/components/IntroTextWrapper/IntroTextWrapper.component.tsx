import {FC} from 'react';

export const IntroTextWrapper: FC<{}> => {
    return (
        
    );
};

class IntroTextWrapper extends React.Component {
  render() {
    return (
      <div className="intro-text-wrapper" style={{ willChange: 'transform', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
        <div className="intro-text-line" style={{ opacity: 1 }}>
          <h1 className="intro-text-word text-super">Nathan</h1>
          <h1 className="intro-text-word text-super">SMITH</h1>
        </div>
        <div className="intro-text-line" style={{ opacity: 1 }}>
          <h1 className="intro-text-word text-super">DESIGN</h1>
          <h1 className="intro-text-word text-super">&amp;</h1>
        </div>
    </div>
    )
  }
}