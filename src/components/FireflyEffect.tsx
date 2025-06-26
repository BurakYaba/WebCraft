"use client";
import React from "react";

const FireflyEffect: React.FC = () => {
  const fireflies = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="firefly-container">
      {fireflies.map((i) => (
        <div key={i} className={`firefly firefly-${i}`}>
          <div className="firefly-before"></div>
          <div className="firefly-after"></div>
        </div>
      ))}

      <style jsx>{`
        .firefly-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 5;
        }

        .firefly {
          position: absolute;
          width: 0.4vw;
          height: 0.4vw;
          margin: -0.2vw 0 0 -0.2vw;
          animation: ease 200s alternate infinite;
          pointer-events: none;
        }

        .firefly::before,
        .firefly::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform-origin: -10vw;
        }

        .firefly::before {
          background: black;
          opacity: 0.4;
          animation: drift ease alternate infinite;
        }

        .firefly::after {
          background: white;
          opacity: 0;
          box-shadow: 0 0 0vw 0vw yellow;
          animation: drift ease alternate infinite, flash ease infinite;
        }

        /* Firefly 1 */
        .firefly-1 {
          left: 20%;
          top: 30%;
          animation-name: move1;
        }
        .firefly-1::before {
          animation-duration: 12s;
        }
        .firefly-1::after {
          animation-duration: 12s, 8000ms;
          animation-delay: 0ms, 3000ms;
        }

        /* Firefly 2 */
        .firefly-2 {
          left: 80%;
          top: 20%;
          animation-name: move2;
        }
        .firefly-2::before {
          animation-duration: 15s;
        }
        .firefly-2::after {
          animation-duration: 15s, 7000ms;
          animation-delay: 0ms, 1500ms;
        }

        /* Firefly 3 */
        .firefly-3 {
          left: 40%;
          top: 70%;
          animation-name: move3;
        }
        .firefly-3::before {
          animation-duration: 18s;
        }
        .firefly-3::after {
          animation-duration: 18s, 9000ms;
          animation-delay: 0ms, 4500ms;
        }

        /* Firefly 4 */
        .firefly-4 {
          left: 60%;
          top: 80%;
          animation-name: move4;
        }
        .firefly-4::before {
          animation-duration: 14s;
        }
        .firefly-4::after {
          animation-duration: 14s, 6000ms;
          animation-delay: 0ms, 2000ms;
        }

        /* Firefly 5 */
        .firefly-5 {
          left: 10%;
          top: 60%;
          animation-name: move5;
        }
        .firefly-5::before {
          animation-duration: 16s;
        }
        .firefly-5::after {
          animation-duration: 16s, 8500ms;
          animation-delay: 0ms, 3800ms;
        }

        /* Firefly 6 */
        .firefly-6 {
          left: 90%;
          top: 50%;
          animation-name: move6;
        }
        .firefly-6::before {
          animation-duration: 13s;
        }
        .firefly-6::after {
          animation-duration: 13s, 7500ms;
          animation-delay: 0ms, 2800ms;
        }

        /* Firefly 7 */
        .firefly-7 {
          left: 30%;
          top: 10%;
          animation-name: move7;
        }
        .firefly-7::before {
          animation-duration: 17s;
        }
        .firefly-7::after {
          animation-duration: 17s, 9200ms;
          animation-delay: 0ms, 4200ms;
        }

        /* Firefly 8 */
        .firefly-8 {
          left: 70%;
          top: 90%;
          animation-name: move8;
        }
        .firefly-8::before {
          animation-duration: 11s;
        }
        .firefly-8::after {
          animation-duration: 11s, 6800ms;
          animation-delay: 0ms, 1800ms;
        }

        /* Firefly 9 */
        .firefly-9 {
          left: 50%;
          top: 40%;
          animation-name: move9;
        }
        .firefly-9::before {
          animation-duration: 19s;
        }
        .firefly-9::after {
          animation-duration: 19s, 9500ms;
          animation-delay: 0ms, 5200ms;
        }

        /* Firefly 10 */
        .firefly-10 {
          left: 15%;
          top: 85%;
          animation-name: move10;
        }
        .firefly-10::before {
          animation-duration: 14s;
        }
        .firefly-10::after {
          animation-duration: 14s, 7200ms;
          animation-delay: 0ms, 3200ms;
        }

        /* Firefly 11 */
        .firefly-11 {
          left: 85%;
          top: 75%;
          animation-name: move11;
        }
        .firefly-11::before {
          animation-duration: 16s;
        }
        .firefly-11::after {
          animation-duration: 16s, 8800ms;
          animation-delay: 0ms, 4100ms;
        }

        /* Firefly 12 */
        .firefly-12 {
          left: 25%;
          top: 15%;
          animation-name: move12;
        }
        .firefly-12::before {
          animation-duration: 12s;
        }
        .firefly-12::after {
          animation-duration: 12s, 6500ms;
          animation-delay: 0ms, 2200ms;
        }

        /* Firefly 13 */
        .firefly-13 {
          left: 75%;
          top: 35%;
          animation-name: move13;
        }
        .firefly-13::before {
          animation-duration: 18s;
        }
        .firefly-13::after {
          animation-duration: 18s, 9100ms;
          animation-delay: 0ms, 4800ms;
        }

        /* Firefly 14 */
        .firefly-14 {
          left: 45%;
          top: 95%;
          animation-name: move14;
        }
        .firefly-14::before {
          animation-duration: 15s;
        }
        .firefly-14::after {
          animation-duration: 15s, 7800ms;
          animation-delay: 0ms, 3500ms;
        }

        /* Firefly 15 */
        .firefly-15 {
          left: 95%;
          top: 65%;
          animation-name: move15;
        }
        .firefly-15::before {
          animation-duration: 13s;
        }
        .firefly-15::after {
          animation-duration: 13s, 8300ms;
          animation-delay: 0ms, 3900ms;
        }

        @keyframes move1 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.8);
          }
          8.33% {
            transform: translateX(40vw) translateY(-15vh) scale(0.6);
          }
          16.67% {
            transform: translateX(-20vw) translateY(50vh) scale(0.9);
          }
          25% {
            transform: translateX(35vw) translateY(-25vh) scale(0.7);
          }
          33.33% {
            transform: translateX(-30vw) translateY(40vh) scale(0.8);
          }
          41.67% {
            transform: translateX(25vw) translateY(-35vh) scale(0.6);
          }
          50% {
            transform: translateX(-45vw) translateY(25vh) scale(0.9);
          }
          58.33% {
            transform: translateX(20vw) translateY(-45vh) scale(0.7);
          }
          66.67% {
            transform: translateX(-40vw) translateY(15vh) scale(0.8);
          }
          75% {
            transform: translateX(30vw) translateY(-30vh) scale(0.6);
          }
          83.33% {
            transform: translateX(-25vw) translateY(35vh) scale(0.9);
          }
          91.67% {
            transform: translateX(45vw) translateY(-20vh) scale(0.7);
          }
          100% {
            transform: translateX(-35vw) translateY(45vh) scale(0.8);
          }
        }

        @keyframes move2 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.7);
          }
          8.33% {
            transform: translateX(-35vw) translateY(25vh) scale(0.9);
          }
          16.67% {
            transform: translateX(40vw) translateY(-40vh) scale(0.6);
          }
          25% {
            transform: translateX(-25vw) translateY(35vh) scale(0.8);
          }
          33.33% {
            transform: translateX(45vw) translateY(-15vh) scale(0.7);
          }
          41.67% {
            transform: translateX(-40vw) translateY(20vh) scale(0.9);
          }
          50% {
            transform: translateX(15vw) translateY(-30vh) scale(0.6);
          }
          58.33% {
            transform: translateX(-20vw) translateY(40vh) scale(0.8);
          }
          66.67% {
            transform: translateX(35vw) translateY(-25vh) scale(0.7);
          }
          75% {
            transform: translateX(-30vw) translateY(30vh) scale(0.9);
          }
          83.33% {
            transform: translateX(25vw) translateY(-35vh) scale(0.6);
          }
          91.67% {
            transform: translateX(-45vw) translateY(15vh) scale(0.8);
          }
          100% {
            transform: translateX(40vw) translateY(-45vh) scale(0.7);
          }
        }

        @keyframes move3 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.8);
          }
          8.33% {
            transform: translateX(40vw) translateY(-25vh) scale(0.6);
          }
          16.67% {
            transform: translateX(-35vw) translateY(40vh) scale(0.9);
          }
          25% {
            transform: translateX(25vw) translateY(-30vh) scale(0.7);
          }
          33.33% {
            transform: translateX(-45vw) translateY(20vh) scale(0.8);
          }
          41.67% {
            transform: translateX(15vw) translateY(-40vh) scale(0.6);
          }
          50% {
            transform: translateX(-30vw) translateY(35vh) scale(0.9);
          }
          58.33% {
            transform: translateX(35vw) translateY(-20vh) scale(0.7);
          }
          66.67% {
            transform: translateX(-25vw) translateY(25vh) scale(0.8);
          }
          75% {
            transform: translateX(45vw) translateY(-35vh) scale(0.6);
          }
          83.33% {
            transform: translateX(-15vw) translateY(30vh) scale(0.9);
          }
          91.67% {
            transform: translateX(30vw) translateY(-25vh) scale(0.7);
          }
          100% {
            transform: translateX(-40vw) translateY(45vh) scale(0.8);
          }
        }

        @keyframes move4 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.7);
          }
          8.33% {
            transform: translateX(-25vw) translateY(20vh) scale(0.9);
          }
          16.67% {
            transform: translateX(40vw) translateY(-40vh) scale(0.6);
          }
          25% {
            transform: translateX(-30vw) translateY(25vh) scale(0.8);
          }
          33.33% {
            transform: translateX(20vw) translateY(-30vh) scale(0.7);
          }
          41.67% {
            transform: translateX(-45vw) translateY(35vh) scale(0.9);
          }
          50% {
            transform: translateX(15vw) translateY(-25vh) scale(0.6);
          }
          58.33% {
            transform: translateX(-35vw) translateY(40vh) scale(0.8);
          }
          66.67% {
            transform: translateX(25vw) translateY(-20vh) scale(0.7);
          }
          75% {
            transform: translateX(-40vw) translateY(30vh) scale(0.9);
          }
          83.33% {
            transform: translateX(30vw) translateY(-45vh) scale(0.6);
          }
          91.67% {
            transform: translateX(-20vw) translateY(15vh) scale(0.8);
          }
          100% {
            transform: translateX(45vw) translateY(-35vh) scale(0.7);
          }
        }

        @keyframes move5 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.8);
          }
          8.33% {
            transform: translateX(25vw) translateY(-40vh) scale(0.6);
          }
          16.67% {
            transform: translateX(-40vw) translateY(30vh) scale(0.9);
          }
          25% {
            transform: translateX(35vw) translateY(-25vh) scale(0.7);
          }
          33.33% {
            transform: translateX(-20vw) translateY(35vh) scale(0.8);
          }
          41.67% {
            transform: translateX(45vw) translateY(-30vh) scale(0.6);
          }
          50% {
            transform: translateX(-15vw) translateY(20vh) scale(0.9);
          }
          58.33% {
            transform: translateX(30vw) translateY(-35vh) scale(0.7);
          }
          66.67% {
            transform: translateX(-35vw) translateY(40vh) scale(0.8);
          }
          75% {
            transform: translateX(20vw) translateY(-20vh) scale(0.6);
          }
          83.33% {
            transform: translateX(-45vw) translateY(25vh) scale(0.9);
          }
          91.67% {
            transform: translateX(15vw) translateY(-40vh) scale(0.7);
          }
          100% {
            transform: translateX(-25vw) translateY(45vh) scale(0.8);
          }
        }

        @keyframes move6 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.7);
          }
          8.33% {
            transform: translateX(-35vw) translateY(35vh) scale(0.9);
          }
          16.67% {
            transform: translateX(40vw) translateY(-25vh) scale(0.6);
          }
          25% {
            transform: translateX(-25vw) translateY(40vh) scale(0.8);
          }
          33.33% {
            transform: translateX(30vw) translateY(-35vh) scale(0.7);
          }
          41.67% {
            transform: translateX(-45vw) translateY(20vh) scale(0.9);
          }
          50% {
            transform: translateX(15vw) translateY(-40vh) scale(0.6);
          }
          58.33% {
            transform: translateX(-30vw) translateY(25vh) scale(0.8);
          }
          66.67% {
            transform: translateX(35vw) translateY(-20vh) scale(0.7);
          }
          75% {
            transform: translateX(-20vw) translateY(30vh) scale(0.9);
          }
          83.33% {
            transform: translateX(45vw) translateY(-45vh) scale(0.6);
          }
          91.67% {
            transform: translateX(-15vw) translateY(35vh) scale(0.8);
          }
          100% {
            transform: translateX(25vw) translateY(-25vh) scale(0.7);
          }
        }

        @keyframes move7 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.8);
          }
          8.33% {
            transform: translateX(30vw) translateY(-35vh) scale(0.6);
          }
          16.67% {
            transform: translateX(-25vw) translateY(40vh) scale(0.9);
          }
          25% {
            transform: translateX(35vw) translateY(-30vh) scale(0.7);
          }
          33.33% {
            transform: translateX(-20vw) translateY(25vh) scale(0.8);
          }
          41.67% {
            transform: translateX(45vw) translateY(-40vh) scale(0.6);
          }
          50% {
            transform: translateX(-15vw) translateY(30vh) scale(0.9);
          }
          58.33% {
            transform: translateX(25vw) translateY(-25vh) scale(0.7);
          }
          66.67% {
            transform: translateX(-35vw) translateY(35vh) scale(0.8);
          }
          75% {
            transform: translateX(20vw) translateY(-45vh) scale(0.6);
          }
          83.33% {
            transform: translateX(-30vw) translateY(20vh) scale(0.9);
          }
          91.67% {
            transform: translateX(40vw) translateY(-35vh) scale(0.7);
          }
          100% {
            transform: translateX(-45vw) translateY(45vh) scale(0.8);
          }
        }

        @keyframes move8 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.7);
          }
          8.33% {
            transform: translateX(-30vw) translateY(35vh) scale(0.9);
          }
          16.67% {
            transform: translateX(40vw) translateY(-40vh) scale(0.6);
          }
          25% {
            transform: translateX(-35vw) translateY(30vh) scale(0.8);
          }
          33.33% {
            transform: translateX(20vw) translateY(-20vh) scale(0.7);
          }
          41.67% {
            transform: translateX(-45vw) translateY(25vh) scale(0.9);
          }
          50% {
            transform: translateX(15vw) translateY(-35vh) scale(0.6);
          }
          58.33% {
            transform: translateX(-25vw) translateY(40vh) scale(0.8);
          }
          66.67% {
            transform: translateX(30vw) translateY(-30vh) scale(0.7);
          }
          75% {
            transform: translateX(-20vw) translateY(20vh) scale(0.9);
          }
          83.33% {
            transform: translateX(35vw) translateY(-45vh) scale(0.6);
          }
          91.67% {
            transform: translateX(-15vw) translateY(35vh) scale(0.8);
          }
          100% {
            transform: translateX(45vw) translateY(-25vh) scale(0.7);
          }
        }

        @keyframes move9 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.8);
          }
          8.33% {
            transform: translateX(20vw) translateY(-40vh) scale(0.6);
          }
          16.67% {
            transform: translateX(-45vw) translateY(25vh) scale(0.9);
          }
          25% {
            transform: translateX(30vw) translateY(-35vh) scale(0.7);
          }
          33.33% {
            transform: translateX(-25vw) translateY(40vh) scale(0.8);
          }
          41.67% {
            transform: translateX(35vw) translateY(-20vh) scale(0.6);
          }
          50% {
            transform: translateX(-15vw) translateY(30vh) scale(0.9);
          }
          58.33% {
            transform: translateX(40vw) translateY(-45vh) scale(0.7);
          }
          66.67% {
            transform: translateX(-30vw) translateY(20vh) scale(0.8);
          }
          75% {
            transform: translateX(25vw) translateY(-25vh) scale(0.6);
          }
          83.33% {
            transform: translateX(-20vw) translateY(35vh) scale(0.9);
          }
          91.67% {
            transform: translateX(15vw) translateY(-30vh) scale(0.7);
          }
          100% {
            transform: translateX(-40vw) translateY(45vh) scale(0.8);
          }
        }

        @keyframes move10 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.7);
          }
          8.33% {
            transform: translateX(-25vw) translateY(20vh) scale(0.9);
          }
          16.67% {
            transform: translateX(40vw) translateY(-30vh) scale(0.6);
          }
          25% {
            transform: translateX(-35vw) translateY(35vh) scale(0.8);
          }
          33.33% {
            transform: translateX(20vw) translateY(-40vh) scale(0.7);
          }
          41.67% {
            transform: translateX(-45vw) translateY(25vh) scale(0.9);
          }
          50% {
            transform: translateX(15vw) translateY(-25vh) scale(0.6);
          }
          58.33% {
            transform: translateX(-30vw) translateY(30vh) scale(0.8);
          }
          66.67% {
            transform: translateX(25vw) translateY(-45vh) scale(0.7);
          }
          75% {
            transform: translateX(-20vw) translateY(40vh) scale(0.9);
          }
          83.33% {
            transform: translateX(35vw) translateY(-20vh) scale(0.6);
          }
          91.67% {
            transform: translateX(-15vw) translateY(35vh) scale(0.8);
          }
          100% {
            transform: translateX(45vw) translateY(-30vh) scale(0.7);
          }
        }

        @keyframes move11 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.8);
          }
          8.33% {
            transform: translateX(35vw) translateY(-40vh) scale(0.6);
          }
          16.67% {
            transform: translateX(-30vw) translateY(30vh) scale(0.9);
          }
          25% {
            transform: translateX(25vw) translateY(-25vh) scale(0.7);
          }
          33.33% {
            transform: translateX(-40vw) translateY(35vh) scale(0.8);
          }
          41.67% {
            transform: translateX(20vw) translateY(-30vh) scale(0.6);
          }
          50% {
            transform: translateX(-15vw) translateY(40vh) scale(0.9);
          }
          58.33% {
            transform: translateX(30vw) translateY(-35vh) scale(0.7);
          }
          66.67% {
            transform: translateX(-25vw) translateY(20vh) scale(0.8);
          }
          75% {
            transform: translateX(45vw) translateY(-45vh) scale(0.6);
          }
          83.33% {
            transform: translateX(-35vw) translateY(25vh) scale(0.9);
          }
          91.67% {
            transform: translateX(15vw) translateY(-20vh) scale(0.7);
          }
          100% {
            transform: translateX(-45vw) translateY(45vh) scale(0.8);
          }
        }

        @keyframes move12 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.7);
          }
          8.33% {
            transform: translateX(-30vw) translateY(35vh) scale(0.9);
          }
          16.67% {
            transform: translateX(25vw) translateY(-40vh) scale(0.6);
          }
          25% {
            transform: translateX(-35vw) translateY(30vh) scale(0.8);
          }
          33.33% {
            transform: translateX(20vw) translateY(-25vh) scale(0.7);
          }
          41.67% {
            transform: translateX(-45vw) translateY(40vh) scale(0.9);
          }
          50% {
            transform: translateX(15vw) translateY(-30vh) scale(0.6);
          }
          58.33% {
            transform: translateX(-25vw) translateY(25vh) scale(0.8);
          }
          66.67% {
            transform: translateX(30vw) translateY(-35vh) scale(0.7);
          }
          75% {
            transform: translateX(-20vw) translateY(20vh) scale(0.9);
          }
          83.33% {
            transform: translateX(35vw) translateY(-45vh) scale(0.6);
          }
          91.67% {
            transform: translateX(-15vw) translateY(30vh) scale(0.8);
          }
          100% {
            transform: translateX(45vw) translateY(-40vh) scale(0.7);
          }
        }

        @keyframes move13 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.8);
          }
          8.33% {
            transform: translateX(30vw) translateY(-30vh) scale(0.6);
          }
          16.67% {
            transform: translateX(-40vw) translateY(25vh) scale(0.9);
          }
          25% {
            transform: translateX(20vw) translateY(-35vh) scale(0.7);
          }
          33.33% {
            transform: translateX(-35vw) translateY(40vh) scale(0.8);
          }
          41.67% {
            transform: translateX(25vw) translateY(-20vh) scale(0.6);
          }
          50% {
            transform: translateX(-15vw) translateY(30vh) scale(0.9);
          }
          58.33% {
            transform: translateX(40vw) translateY(-45vh) scale(0.7);
          }
          66.67% {
            transform: translateX(-30vw) translateY(20vh) scale(0.8);
          }
          75% {
            transform: translateX(15vw) translateY(-25vh) scale(0.6);
          }
          83.33% {
            transform: translateX(-45vw) translateY(35vh) scale(0.9);
          }
          91.67% {
            transform: translateX(35vw) translateY(-40vh) scale(0.7);
          }
          100% {
            transform: translateX(-20vw) translateY(45vh) scale(0.8);
          }
        }

        @keyframes move14 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.7);
          }
          8.33% {
            transform: translateX(-20vw) translateY(25vh) scale(0.9);
          }
          16.67% {
            transform: translateX(40vw) translateY(-30vh) scale(0.6);
          }
          25% {
            transform: translateX(-25vw) translateY(35vh) scale(0.8);
          }
          33.33% {
            transform: translateX(30vw) translateY(-25vh) scale(0.7);
          }
          41.67% {
            transform: translateX(-45vw) translateY(40vh) scale(0.9);
          }
          50% {
            transform: translateX(15vw) translateY(-35vh) scale(0.6);
          }
          58.33% {
            transform: translateX(-30vw) translateY(20vh) scale(0.8);
          }
          66.67% {
            transform: translateX(25vw) translateY(-45vh) scale(0.7);
          }
          75% {
            transform: translateX(-35vw) translateY(30vh) scale(0.9);
          }
          83.33% {
            transform: translateX(20vw) translateY(-20vh) scale(0.6);
          }
          91.67% {
            transform: translateX(-15vw) translateY(25vh) scale(0.8);
          }
          100% {
            transform: translateX(45vw) translateY(-30vh) scale(0.7);
          }
        }

        @keyframes move15 {
          0% {
            transform: translateX(0vw) translateY(0vh) scale(0.8);
          }
          8.33% {
            transform: translateX(25vw) translateY(-35vh) scale(0.6);
          }
          16.67% {
            transform: translateX(-40vw) translateY(30vh) scale(0.9);
          }
          25% {
            transform: translateX(35vw) translateY(-40vh) scale(0.7);
          }
          33.33% {
            transform: translateX(-20vw) translateY(25vh) scale(0.8);
          }
          41.67% {
            transform: translateX(45vw) translateY(-30vh) scale(0.6);
          }
          50% {
            transform: translateX(-15vw) translateY(35vh) scale(0.9);
          }
          58.33% {
            transform: translateX(30vw) translateY(-25vh) scale(0.7);
          }
          66.67% {
            transform: translateX(-35vw) translateY(40vh) scale(0.8);
          }
          75% {
            transform: translateX(20vw) translateY(-45vh) scale(0.6);
          }
          83.33% {
            transform: translateX(-25vw) translateY(20vh) scale(0.9);
          }
          91.67% {
            transform: translateX(15vw) translateY(-35vh) scale(0.7);
          }
          100% {
            transform: translateX(-45vw) translateY(45vh) scale(0.8);
          }
        }

        @keyframes drift {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes flash {
          0%,
          30%,
          100% {
            opacity: 0;
            box-shadow: 0 0 0vw 0vw yellow;
          }
          5% {
            opacity: 1;
            box-shadow: 0 0 2vw 0.4vw yellow;
          }
        }
      `}</style>
    </div>
  );
};

export default FireflyEffect;
