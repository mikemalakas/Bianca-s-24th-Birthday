import React, { useEffect, useRef } from "react";

const Timer = () => {
  const clockRef = useRef(null);

  useEffect(() => {
    function FlipClock(el, config) {
      let updateTimeout;
      const _this = this;
      _this.el = el;
      _this.config = Object.assign(
        {
          startDate: new Date(2020, 1, 24), // Feb 24, 2020
          labels: {
            years: "Years",
            days: "Days",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds",
          },
        },
        config
      );

      _this.current = {
        y: "000",
        d: "000",
        h: "00",
        m: "00",
        s: "00",
      };

      createView();
      updateView();
      addObserver();

      function start() {
        _this.current = getTimeSince(
          new Date().getTime(),
          _this.config.startDate.getTime()
        );
        updateView();
        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(start, 500);
      }

      function stop() {
        clearTimeout(updateTimeout);
      }

      function destroy() {
        stop();
        _this.observer.disconnect();
        _this.el.innerHTML = "";
      }

      function getTimeSince(dateNow, datePast) {
        let delta = Math.abs(dateNow - datePast) / 1000;
        const y = Math.floor(delta / (86400 * 365.25));
        delta -= y * 86400 * 365.25;
        const d = pad3(Math.floor(delta / 86400));
        delta -= parseInt(d) * 86400;
        const h = pad2(Math.floor(delta / 3600) % 24);
        delta -= parseInt(h) * 3600;
        const m = pad2(Math.floor(delta / 60) % 60);
        delta -= parseInt(m) * 60;
        const s = pad2(Math.floor(delta % 60));

        return { y: y.toString(), d, h, m, s };
      }

      function pad2(n) {
        return n < 10 ? "0" + n : "" + n;
      }

      function pad3(n) {
        return n < 10 ? "00" + n : n < 100 ? "0" + n : "" + n;
      }

      function createView() {
        _this.yearsLeaf = createLeaf(_this.config.labels.years, 1);
        _this.daysLeaf = createLeaf(_this.config.labels.days, 3);
        _this.hoursLeaf = createLeaf(_this.config.labels.hours);
        _this.minutesLeaf = createLeaf(_this.config.labels.minutes);
        _this.secondsLeaf = createLeaf(_this.config.labels.seconds);
      }

      function createLeaf(label, digits = 2) {
        const leaf = document.createElement("div");
        leaf.className = `leaf _${digits}-digits`;
        leaf.setAttribute("data-label", label);

        const parts = ["top", "leaf-front", "leaf-back", "bottom"].map(
          (cls) => {
            const div = document.createElement("div");
            const span = document.createElement("span");
            div.className = cls;
            div.appendChild(span);
            leaf.appendChild(div);
            return { div, span };
          }
        );

        _this.el.appendChild(leaf);

        return {
          el: leaf,
          topLabel: parts[0].span,
          frontLabel: parts[1].span,
          backLabel: parts[2].span,
          bottomLabel: parts[3].span,
        };
      }

      function updateView() {
        updateLeaf(_this.yearsLeaf, _this.current.y);
        updateLeaf(_this.daysLeaf, _this.current.d);
        updateLeaf(_this.hoursLeaf, _this.current.h);
        updateLeaf(_this.minutesLeaf, _this.current.m);
        updateLeaf(_this.secondsLeaf, _this.current.s);
      }

      function updateLeaf(leaf, value) {
        if (leaf.isFlipping) return;
        const currentValue = leaf.topLabel.innerText;

        if (value !== currentValue) {
          leaf.isFlipping = true;
          leaf.topLabel.innerText = value;
          leaf.backLabel.innerText = value;
          leaf.el.classList.add("flip");

          clearTimeout(leaf.timeout);
          leaf.timeout = setTimeout(() => {
            leaf.frontLabel.innerText = value;
            leaf.bottomLabel.innerText = value;
            leaf.el.classList.remove("flip");
          }, 600);

          clearTimeout(leaf.timeout2);
          leaf.timeout2 = setTimeout(() => {
            leaf.isFlipping = false;
          }, 1000);
        }
      }

      function addObserver() {
        _this.observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) start();
            else stop();
          });
        });

        _this.observer.observe(_this.el);
      }

      return {
        start,
        stop,
        destroy,
        getCurrent: () => _this.current,
      };
    }

    const clock = new FlipClock(clockRef.current);

    return () => {
      clock.destroy();
    };
  }, []);

  return (
    <section className="h-[100vh] flex justify-center items-center p-5">
      <div data-aos="fade-up" data-aos-delay="150">
        <h2 className="text-[#e73a7f] text-3xl md:text-7xl font-fredoka text-center mb-5">
          Time since we're officialy together
        </h2>
        <div className="flipclock" ref={clockRef}></div>
      </div>
    </section>
  );
};

export default Timer;
