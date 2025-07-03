import React, { useEffect, useRef, useState } from "react";

const Letter = () => {
  const envelopeRef = useRef(null);
  const modalContentRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Disable scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const toggleEnvelope = () => {
    const envelope = envelopeRef.current;
    if (envelope.classList.contains("open")) {
      envelope.classList.remove("open");
      envelope.classList.add("close");
    } else {
      envelope.classList.remove("close");
      envelope.classList.add("open");
    }

    // show modal after opening the envelope
    setIsModalOpen(true);
  };

  const handleOverlayClick = (e) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(e.target)
    ) {
      closeModal();
    }
  };

  const closeModal = () => {
    const envelope = envelopeRef.current;
    if (envelope.classList.contains("open")) {
      envelope.classList.remove("open");
      envelope.classList.add("close");
    } else {
      envelope.classList.remove("close");
      envelope.classList.add("open");
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="h-[100vh] grid place-items-center">
        <div className="envelope-wrapper">
          <div className="mb-[-100px] text-center text-2xl  text-[#e73a7f] font-fredoka">
            tap to
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <div
              id="envelope"
              ref={envelopeRef}
              className="close"
              onClick={toggleEnvelope}
            >
              <div className="front flap"></div>
              <div className="front pocket"></div>
              <div className="letter">
                <div className="words line1"></div>
                <div className="words line2"></div>
                <div className="words line3"></div>
                <div className="words line4"></div>
              </div>
              <div className="hearts">
                <div className="heart a1"></div>
                <div className="heart a2"></div>
                <div className="heart a3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[-120px] text-center text-2xl text-[#e73a7f] font-fredoka">
          reveal
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={handleOverlayClick}
          data-aos="fade-in"
          data-aos-delay="1500"
        >
          <div
            ref={modalContentRef}
            className="bg-white rounded-2xl p-8 shadow-lg max-w-md max-h-[500px] overflow-hidden border-dotted border-4 border-[#e73a7f] relative"
            data-aos="fade-up"
            data-aos-delay="1650"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">💌</h2>
            <div className="max-h-[350px] overflow-y-auto ">
              <p className="mb-4 text-3xl text-[#a52a5b] font-tangerine font-bold">
                Hi bubbie ❤️<br></br> Happy 24th birthday!! Sobrang mahal kita
                higit pa sa inaakala mo. Habang nabubuhay ako meron ka laging
                someone na proud sayo sa lahat ng bagay. Lagi akong andito para
                sayo, I wish sana lagi kitang ma hug sa tuwing napapagod or
                naddrain ka kasi ayokong mag suffer ko alone, gusto ko malaman
                mo na you're valued, loved and cared for. Hinding hindi ka
                magiisa at andito lang ako lagi para iremind sayo kung gaano ka
                kahalaga saken. Dadating den ang araw na hindi na naten ma
                mimiss ang isa't isa kasi magkasama na tayo parati. Sana
                nagustuhan mo tong mini gift ko sayo, sa next sahod ko ispoil
                kita ng kahit anong gusto mo HEHE
                <br />
                <span className="mt-5">
                  Your bubbie, <br />
                  Mike
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Letter;
