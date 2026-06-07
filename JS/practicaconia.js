// LESSA ALPHABET
const lessaAlphabet = {
    'A':{ description:"Close your fist with your thumb extended to the side.", example:"Avocado", level:"Basic" },
    'B':{ description:"Open hand, all 4 fingers up, thumb folded in.", example:"Boat", level:"Basic" },
    'C':{ description:"All fingers curved forming a C — open gap between thumb and index.", example:"House", level:"Basic" },
    'D':{ description:"Only index finger pointing up, rest curled in a fist.", example:"Finger", level:"Basic" },
    'E':{ description:"All fingers and thumb curled tight toward the palm.", example:"Elephant", level:"Basic" },
    'F':{ description:"Thumb and index pinch; middle, ring and pinky extend up.", example:"Photo", level:"Basic" },
    'G':{ description:"Fist with index pointing sideways — hand oriented horizontally.", example:"Cat", level:"Basic" },
    'H':{ description:"Index and middle extended horizontally to the side.", example:"Leaf", level:"Basic" },
    'I':{ description:"Only the pinky extended upward, all others curled.", example:"Church", level:"Basic" },
    'J':{ description:"Pinky up like I, then draw a J in the air.", example:"Toy", level:"Intermediate" },
    'K':{ description:"Index and middle pointing UP with thumb between them.", example:"Kilo", level:"Intermediate" },
    'L':{ description:"Index pointing up + thumb pointing to the side (L shape).", example:"Moon", level:"Intermediate" },
    'M':{ description:"Closed fist: index, middle AND ring folded over the thumb together.", example:"Mom", level:"Intermediate" },
    'N':{ description:"Closed fist: ONLY index and middle folded over the thumb (ring stays lower).", example:"Cloud", level:"Intermediate" },
    'O':{ description:"All fingers curved forming a circle with the thumb.", example:"Eye", level:"Intermediate" },
    'P':{ description:"Like K but fingers pointing DOWN toward the floor.", example:"Dad", level:"Intermediate" },
    'Q':{ description:"Hand pointing down, thumb and index pinching downward.", example:"Cheese", level:"Intermediate" },
    'R':{ description:"Index and middle crossed and pointing up.", example:"Mouse", level:"Intermediate" },
    'S':{ description:"Closed fist, thumb resting over the fingers.", example:"Sun", level:"Advanced" },
    'T':{ description:"Thumb tip pushed up between index and middle finger.", example:"Cup", level:"Advanced" },
    'U':{ description:"Index and middle together pointing straight up.", example:"Grape", level:"Advanced" },
    'V':{ description:"Index and middle spread apart in a V shape.", example:"Cow", level:"Advanced" },
    'W':{ description:"Index, middle and ring extended and spread — pinky closed.", example:"Waffle", level:"Advanced" },
    'X':{ description:"Index finger hooked (half-bent), rest of fingers closed.", example:"Xylophone", level:"Advanced" },
    'Y':{ description:"Thumb out to the side and pinky pointing up.", example:"Yoyo", level:"Advanced" },
    'Z':{ description:"Index finger pointing up; draw a Z in the air.", example:"Shoe", level:"Advanced" }
};

let practiceLetter  = null;
let handsInstance   = null;
let cameraInstance  = null;
let isCameraRunning = false;

// UI helpers
function renderPracticeSelect() {
    const select = document.getElementById('practiceSelect');
    const quick  = document.getElementById('practiceQuickSelect');
    select.innerHTML = '<option value="">Select letter...</option>';
    quick.innerHTML  = '';
    Object.keys(lessaAlphabet).forEach(letter => {
        const opt = document.createElement('option');
        opt.value = letter;
        opt.textContent = `${letter} - ${lessaAlphabet[letter].example}`;
        select.appendChild(opt);
        const btn = document.createElement('button');
        btn.textContent = letter;
        btn.className   = 'btn-quick';
        // Asignamos un id único para poder encontrarlo luego
        btn.id = `btn-${letter}`;
        // Tooltip para mostrar la palabra de ejemplo
        btn.title = `${letter} - ${lessaAlphabet[letter].example}`;
        btn.onclick = () => setPracticeLetter(letter);
        quick.appendChild(btn);
    });
}

function setPracticeLetter(letter) {
    if (!letter) return;
    practiceLetter = letter;
    document.getElementById('targetLetter').innerText    = letter;
    document.getElementById('practiceSelect').value      = letter;
    const d = lessaAlphabet[letter];
    const g = document.getElementById('letterGuide');
    g.classList.remove('hidden-section');
    g.style.display = 'block';
    document.getElementById('guideLetter').innerText      = letter;
    document.getElementById('guideDescription').innerText = d.description;
    document.getElementById('guideLevel').innerText       = `Level ${d.level}`;
    document.getElementById('guideExample').innerText     = `Example: ${d.example}`;
    updatePracticeFeedback('waiting', `📖 Practice the letter ${letter}. Show the sign in front of the camera`, 0);

    // ----- RESALTAR EL BOTÓN ACTIVO -----
    // Quitamos la clase 'active' de todos los botones
    document.querySelectorAll('.btn-quick').forEach(btn => btn.classList.remove('active'));
    // Se la ponemos al botón de la letra seleccionada
    const activeBtn = document.getElementById(`btn-${letter}`);
    if (activeBtn) activeBtn.classList.add('active');
}

function updatePracticeFeedback(status, message, accuracy = 0) {
    const o = document.getElementById('statusOverlay');
    o.classList.remove('waiting','correct','incorrect');
    if (status === 'correct') {
        o.classList.add('correct');
        o.innerHTML = `<p style="margin:0;"><i class="fas fa-check-circle"></i> ${message}</p>`;
    } else if (status === 'incorrect') {
        o.classList.add('incorrect');
        o.innerHTML = `<p style="margin:0;"><i class="fas fa-times-circle"></i> ${message}</p>`;
    } else {
        o.classList.add('waiting');
        o.innerHTML = `<p style="margin:0;">${message}</p>`;
    }
}

//  Orientation debug 
function detectHandOrientation(lm) {
    const dx = lm[12].x - lm[0].x, dy = lm[12].y - lm[0].y;
    if (Math.abs(dy) > Math.abs(dx)*1.1) return dy < 0 ? 'UP' : 'DOWN';
    return dx < 0 ? 'LEFT' : 'RIGHT';
}

// CORE HELPERS  (MediaPipe Y: 0=top, 1=bottom)
function isUp(tip, mcp, thr=0.06)   { return (mcp.y - tip.y) > thr; }
function isDown(tip, mcp, thr=0.05) { return (tip.y - mcp.y) > thr; }
function isCurl(tip, pip, thr=0.02) { return tip.y > pip.y - thr; }

// FINGER CONFIGURATION

function getFingerConfiguration(lm) {
    const W=lm[0];
    const tC=lm[1], tM=lm[2], tI=lm[3], tT=lm[4];
    const iM=lm[5], iP=lm[6], iD=lm[7], iT=lm[8];
    const mM=lm[9], mP=lm[10],mD=lm[11],mT=lm[12];
    const rM=lm[13],rP=lm[14],rD=lm[15],rT=lm[16];
    const pM=lm[17],pP=lm[18],pD=lm[19],pT=lm[20];

    const indexUp  = isUp(iT,iM,0.06);
    const middleUp = isUp(mT,mM,0.06);
    const ringUp   = isUp(rT,rM,0.06);
    const pinkyUp  = isUp(pT,pM,0.06);
    const indexDown  = isDown(iT,iM,0.05);
    const middleDown = isDown(mT,mM,0.05);
    const indexCurled  = isCurl(iT,iP);
    const middleCurled = isCurl(mT,mP);
    const ringCurled   = isCurl(rT,rP);
    const pinkyCurled  = isCurl(pT,pP);

    const dTipC = Math.hypot(tT.x-tC.x, tT.y-tC.y);
    const dIpC  = Math.hypot(tI.x-tC.x, tI.y-tC.y);
    const thumbExtended = dTipC > dIpC * 1.18;
    const thumbLateral  = Math.abs(tT.x - tM.x) > 0.055;
    const thumbIdxDist  = Math.hypot(tT.x-iT.x, tT.y-iT.y);
    const isPinch       = thumbIdxDist < 0.07;

    const hDx=mT.x-W.x, hDy=mT.y-W.y;
    const handUp   = hDy < -0.08;
    const handDown = hDy >  0.08;
    const handSide = Math.abs(hDx) > Math.abs(hDy)*1.1;
    const imSep    = Math.abs(iT.x - mT.x);
    const extCount = [indexUp,middleUp,ringUp,pinkyUp].filter(Boolean).length;

    return {
        W, tT,tI,tM,tC, iT,iP,iM, mT,mP,mM, rT,rP,rM, pT,pP,pM,
        indexExtended:indexUp, middleExtended:middleUp,
        ringExtended:ringUp,   pinkyExtended:pinkyUp,
        thumbExtended, thumbLateral,
        indexDown, middleDown,
        indexCurled, middleCurled, ringCurled, pinkyCurled,
        thumbIndexDist:thumbIdxDist, isPinch, idxMidSep:imSep,
        fingersPointingUp:handUp, fingersPointingDown:handDown, fingersPointingSide:handSide,
        extendedCount:extCount
    };
}


// K vs P

function recognizeKorP(lm, letter) {
    const c = getFingerConfiguration(lm);
    const dy=c.mT.y-c.W.y, dx=c.mT.x-c.W.x;
    let ori;
    if (Math.abs(dy)>Math.abs(dx)*1.1) ori=dy<0?'UP':'DOWN';
    else ori=dx<0?'LEFT':'RIGHT';

    const iUp =(c.iM.y-c.iT.y)>0.06, mUp =(c.mM.y-c.mT.y)>0.06;
    const iDwn=(c.iT.y-c.iM.y)>0.05, mDwn=(c.mT.y-c.mM.y)>0.05;
    const rpCl=!c.ringExtended&&!c.pinkyExtended&&c.ringCurled&&c.pinkyCurled;

    if (letter==='K') {
        const kF=iUp&&mUp;
        const kO=ori==='UP'||((ori==='RIGHT'||ori==='LEFT')&&dy<0);
        if (kF&&kO&&rpCl&&c.thumbExtended) return 93;
        if (kF&&kO&&rpCl)                  return 80;
        if (kF&&kO)                         return 65;
        if (kF&&rpCl)                       return 55;
        if (ori==='DOWN')                   return 10;
        return 25;
    }
    if (letter==='P') {
        const wA=c.W.y<c.iT.y&&c.W.y<c.mT.y;
        const pF=iDwn&&mDwn, pO=ori==='DOWN'||wA;
        if (pF&&pO&&rpCl&&c.thumbExtended) return 93;
        if (pF&&pO&&rpCl)                  return 82;
        if (pF&&wA)                         return 70;
        if (wA&&rpCl)                       return 60;
        if (ori==='UP')                     return 10;
        return 25;
    }
    return 50;
}

// MAIN RECOGNITION — 26 letters
function analyzeHandShapeForLetter(lm, letter) {
    if (!lm || lm.length < 21) return 0;
    if (letter==='K'||letter==='P') return recognizeKorP(lm, letter);
    const c = getFingerConfiguration(lm);

    switch(letter) {

    // ── A ── Closed fist, thumb LATERALLY extended
    case 'A': {
        const allCurl=c.indexCurled&&c.middleCurled&&c.ringCurled&&c.pinkyCurled;
        if (allCurl&&c.thumbLateral)             return 93;
        if (allCurl&&c.thumbExtended)            return 72;
        if (c.extendedCount===0&&c.thumbLateral) return 78;
        if (c.extendedCount===0&&c.thumbExtended)return 62;
        if (allCurl)                             return 52;
        return 10;
    }

    // ── B ── All 4 fingers up, thumb folded IN
    case 'B': {
        const allUp=c.indexExtended&&c.middleExtended&&c.ringExtended&&c.pinkyExtended;
        const tIn=!c.thumbExtended&&!c.thumbLateral;
        if (allUp&&tIn&&c.fingersPointingUp) return 94;
        if (allUp&&tIn)  return 82;
        if (allUp)       return 62;
        if (c.extendedCount>=3) return 35;
        return 12;
    }

    // ── C ── All fingers partially curved, open gap (not a pinch)
    case 'C': {
        const pI=!c.indexExtended&&!c.indexCurled, pM=!c.middleExtended&&!c.middleCurled;
        const pR=!c.ringExtended&&!c.ringCurled,   pP=!c.pinkyExtended&&!c.pinkyCurled;
        const pCnt=[pI,pM,pR,pP].filter(Boolean).length;
        const gap=c.thumbIndexDist>0.09&&c.thumbIndexDist<0.32;
        if (pCnt>=3&&gap&&!c.thumbExtended) return 90;
        if (pCnt>=3&&gap) return 74;
        if (pCnt>=2&&gap) return 60;
        if (gap&&c.extendedCount===0) return 50;
        return 15;
    }

    // ── D ── Only index up, rest tightly curled, tip above wrist
    case 'D': {
        const only=c.indexExtended&&!c.middleExtended&&!c.ringExtended&&!c.pinkyExtended;
        const curl=c.middleCurled&&c.ringCurled&&c.pinkyCurled;
        const high=c.iT.y<c.W.y;
        if (only&&curl&&high) return 95;
        if (only&&curl)       return 85;
        if (only&&high)       return 72;
        if (only)             return 58;
        return 12;
    }

    // ── E ── ALL fingers + thumb curled tight, tips close to palm
    case 'E': {
        const all=c.indexCurled&&c.middleCurled&&c.ringCurled&&c.pinkyCurled;
        const tIn=!c.thumbExtended&&!c.thumbLateral;
        const avg=(Math.hypot(c.iT.x-c.W.x,c.iT.y-c.W.y)+Math.hypot(c.mT.x-c.W.x,c.mT.y-c.W.y)+
                   Math.hypot(c.rT.x-c.W.x,c.rT.y-c.W.y)+Math.hypot(c.pT.x-c.W.x,c.pT.y-c.W.y))/4;
        if (all&&tIn&&avg<0.24) return 92;
        if (all&&tIn)           return 80;
        if (all&&avg<0.24)      return 68;
        if (all)                return 58;
        return 15;
    }

    // ── F ── Thumb+index pinch; middle+ring+pinky UP
    case 'F': {
        const threeUp=c.middleExtended&&c.ringExtended&&c.pinkyExtended;
        if (c.isPinch&&threeUp&&!c.indexExtended) return 94;
        if (c.isPinch&&threeUp)                   return 78;
        if (c.isPinch&&c.extendedCount>=2)        return 58;
        if (c.isPinch)                            return 42;
        return 12;
    }

    // ── G ── Fist, index pointing SIDEWAYS; hand lateral
    case 'G': {
        const hX=Math.abs(c.mT.x-c.W.x), hY=Math.abs(c.mT.y-c.W.y);
        const lat=hX>hY*0.85;
        const iX=Math.abs(c.iT.x-c.iM.x), iY=Math.abs(c.iT.y-c.iM.y);
        const iSide=iX>0.05||(iX>iY*0.75);
        const rCurl=c.middleCurled&&c.ringCurled&&c.pinkyCurled;
        const rDown=!c.middleExtended&&!c.ringExtended&&!c.pinkyExtended;
        if (lat&&iSide&&rCurl) return 92;
        if (lat&&iSide&&rDown) return 80;
        if (lat&&rCurl)        return 65;
        if (iSide&&rCurl)      return 58;
        if (c.fingersPointingUp) return 10;
        return 18;
    }

    // ── H ── Index+middle horizontal to the side; ring+pinky closed
    case 'H': {
        const two=c.indexExtended&&c.middleExtended;
        const rCl=!c.ringExtended&&!c.pinkyExtended;
        const iH=Math.abs(c.iT.x-c.iM.x)>Math.abs(c.iT.y-c.iM.y)*0.65;
        const mH=Math.abs(c.mT.x-c.mM.x)>Math.abs(c.mT.y-c.mM.y)*0.65;
        if (two&&rCl&&(iH&&mH))           return 92;
        if (two&&rCl&&c.fingersPointingUp) return 82;
        if (two&&rCl)                      return 70;
        if (two&&(iH||mH))                 return 58;
        return 12;
    }

    // ── I ── Only pinky up, rest tightly curled
    case 'I': {
        const only=c.pinkyExtended&&!c.indexExtended&&!c.middleExtended&&!c.ringExtended;
        const curl=c.indexCurled&&c.middleCurled&&c.ringCurled;
        if (only&&curl) return 95;
        if (only)       return 80;
        if (c.pinkyExtended&&c.extendedCount===1) return 70;
        if (c.pinkyExtended) return 42;
        return 10;
    }

    // ── J ── Same static shape as I + motion; detect static part
    case 'J': {
        const only=c.pinkyExtended&&!c.indexExtended&&!c.middleExtended&&!c.ringExtended;
        if (only) return 85;
        if (c.pinkyExtended&&c.extendedCount<=2) return 52;
        return 12;
    }

    // ── L ── Index UP + thumb clearly LATERAL
    case 'L': {
        const iHigh=(c.iM.y-c.iT.y)>0.07;
        const tSide=Math.abs(c.tT.x-c.tM.x)>0.06;
        const rCurl=c.middleCurled&&c.ringCurled&&c.pinkyCurled;
        const rDown=!c.middleExtended&&!c.ringExtended&&!c.pinkyExtended;
        if (iHigh&&tSide&&rCurl)         return 96;
        if (iHigh&&tSide&&rDown)         return 88;
        if (iHigh&&c.thumbExtended&&rCurl) return 82;
        if (iHigh&&tSide)                return 70;
        if (iHigh&&c.thumbExtended)      return 58;
        if (c.extendedCount>=2)          return 12;
        return 10;
    }

    // ── M ─────────────────────────────────────────────────────
    case 'M': {
        const noneUp = !c.indexExtended && !c.middleExtended &&
                       !c.ringExtended  && !c.pinkyExtended;

        function curvM(tip, pip, mcp) {
            const d1 = Math.hypot(tip.x-mcp.x, tip.y-mcp.y);
            const d2 = Math.hypot(pip.x-mcp.x, pip.y-mcp.y);
            return d2 > 0.001 ? d1/d2 : 2.0;
        }
        const curvIdx = curvM(c.iT, c.iP, c.iM);
        const curvMid = curvM(c.mT, c.mP, c.mM);
        const curvRng = curvM(c.rT, c.rP, c.rM);

        const ringAsOrMoreCurvedThanMid = curvRng <= curvMid + 0.20;
        const ringAsOrMoreCurvedThanIdx = curvRng <= curvIdx + 0.25;

        const dy_rm = c.rT.y - c.mT.y;
        const ringNotBelowMid = dy_rm < 0.030;

        const maxDyGroup = Math.max(
            Math.abs(c.iT.y - c.mT.y),
            Math.abs(c.mT.y - c.rT.y),
            Math.abs(c.iT.y - c.rT.y)
        );
        const tipsLevel = maxDyGroup < 0.075;

        const allLowCurv = curvIdx < 1.30 && curvMid < 1.30 && curvRng < 1.30;

        if (noneUp && ringAsOrMoreCurvedThanMid && ringAsOrMoreCurvedThanIdx && allLowCurv) return 92;
        if (noneUp && ringAsOrMoreCurvedThanMid && allLowCurv && ringNotBelowMid)           return 86;
        if (noneUp && ringAsOrMoreCurvedThanMid && allLowCurv)                               return 80;
        if (noneUp && ringAsOrMoreCurvedThanMid && tipsLevel)                                return 74;
        if (noneUp && ringAsOrMoreCurvedThanMid && ringNotBelowMid)                          return 68;
        if (noneUp && allLowCurv && ringNotBelowMid)                                         return 62;
        if (curvRng > curvMid + 0.40) return 14;
        if (dy_rm > 0.060)            return 14;
        if (noneUp)                   return 40;
        return 12;
    }

    // ── N ─────────────────────────────────────────────────────
    case 'N': {
        const noneUp = !c.indexExtended && !c.middleExtended &&
                       !c.ringExtended  && !c.pinkyExtended;

        function curvN(tip, pip, mcp) {
            const d1 = Math.hypot(tip.x-mcp.x, tip.y-mcp.y);
            const d2 = Math.hypot(pip.x-mcp.x, pip.y-mcp.y);
            return d2 > 0.001 ? d1/d2 : 2.0;
        }
        const curvIdx = curvN(c.iT, c.iP, c.iM);
        const curvMid = curvN(c.mT, c.mP, c.mM);
        const curvRng = curvN(c.rT, c.rP, c.rM);

        const ringMuchLessCurved = curvRng > curvMid + 0.40;
        const idxMidWellCurved = curvIdx < 1.00 && curvMid < 1.00;

        const dy_rm = c.rT.y - c.mT.y;
        const ringBelowMid = dy_rm > 0.020;

        const d_im = Math.hypot(c.iT.x-c.mT.x, c.iT.y-c.mT.y);
        const d_ir = Math.hypot(c.iT.x-c.rT.x, c.iT.y-c.rT.y);
        const pairTighter = d_im < d_ir * 0.87;

        const maxDyGroup = Math.max(
            Math.abs(c.iT.y - c.mT.y),
            Math.abs(c.mT.y - c.rT.y),
            Math.abs(c.iT.y - c.rT.y)
        );
        const tipsSpread = maxDyGroup > 0.025;

        if (noneUp && ringMuchLessCurved && idxMidWellCurved && ringBelowMid && pairTighter) return 92;
        if (noneUp && ringMuchLessCurved && idxMidWellCurved && ringBelowMid)                 return 86;
        if (noneUp && ringMuchLessCurved && idxMidWellCurved && pairTighter)                  return 80;
        if (noneUp && ringMuchLessCurved && idxMidWellCurved)                                 return 74;
        if (noneUp && ringMuchLessCurved && ringBelowMid && tipsSpread)                       return 68;
        if (noneUp && ringMuchLessCurved && ringBelowMid)                                     return 62;
        if (noneUp && ringBelowMid && pairTighter && tipsSpread)                              return 56;
        if (curvRng <= curvMid + 0.20) return 14;
        if (dy_rm < 0.010)             return 14;
        if (noneUp && ringBelowMid)    return 50;
        if (noneUp)                    return 35;
        return 12;
    }

    // ── O ── All fingers curved into circle; no finger fully extended
    case 'O': {
        const none=!c.indexExtended&&!c.middleExtended&&!c.ringExtended&&!c.pinkyExtended;
        const big=c.thumbIndexDist<0.12&&none;
        if (big&&!c.thumbExtended) return 92;
        if (big)                    return 76;
        if (c.isPinch&&none)        return 70;
        if (big||(c.isPinch&&c.extendedCount===0)) return 58;
        return 12;
    }

    // ── Q ── Hand pointing DOWN, thumb+index pinching downward
    case 'Q': {
        const wA=c.W.y<c.iT.y;
        const iHg=c.iT.y>c.iM.y;
        const tDn=c.tT.y>c.tM.y-0.02;
        const nP=c.thumbIndexDist<0.10;
        if (wA&&iHg&&nP&&tDn) return 90;
        if (wA&&iHg&&nP)      return 80;
        if (c.isPinch&&c.fingersPointingDown) return 80;
        if (c.isPinch&&wA)    return 68;
        if (c.isPinch)        return 50;
        return 12;
    }

    // ── R ── Index+middle UP and CROSSED (tips close in X)
    case 'R': {
        const two=c.indexExtended&&c.middleExtended;
        const rCl=!c.ringExtended&&!c.pinkyExtended;
        if (two&&rCl&&c.idxMidSep<0.028) return 90;
        if (two&&rCl&&c.idxMidSep<0.048) return 72;
        if (two&&rCl)                     return 50;
        return 12;
    }

    // ── S ── Tight fist; thumb over fingers (not lateral, not extended)
    case 'S': {
        const all=c.indexCurled&&c.middleCurled&&c.ringCurled&&c.pinkyCurled;
        const tOv=!c.thumbExtended&&!c.thumbLateral;
        if (all&&tOv)                  return 92;
        if (all&&!c.thumbExtended)     return 80;
        if (c.extendedCount===0&&tOv)  return 74;
        if (c.extendedCount===0&&!c.thumbExtended) return 58;
        return 12;
    }

    // ── T ── Closed fist; thumb tip pushed UP between index and middle
    case 'T': {
        const allCurl=c.indexCurled&&c.middleCurled&&c.ringCurled&&c.pinkyCurled;
        const allDown=!c.indexExtended&&!c.middleExtended&&!c.ringExtended&&!c.pinkyExtended;
        const notLat=!c.thumbLateral;
        const thumbAboveMcp=c.tT.y<c.iM.y+0.02;
        const thumbAbovePip=c.tT.y<c.iP.y+0.03;
        const lx=Math.min(c.iM.x,c.mM.x)-0.045;
        const rx=Math.max(c.iM.x,c.mM.x)+0.045;
        const thumbXok=c.tT.x>lx&&c.tT.x<rx;
        if (allCurl&&notLat&&thumbAboveMcp&&thumbXok&&thumbAbovePip) return 93;
        if (allCurl&&notLat&&thumbAboveMcp&&thumbXok)                  return 83;
        if (allCurl&&notLat&&thumbAboveMcp)                            return 72;
        if (allDown&&notLat&&thumbAboveMcp&&thumbXok)                  return 68;
        if (allCurl&&notLat&&!c.thumbExtended)                         return 52;
        if (c.thumbLateral||c.thumbExtended) return 10;
        return 18;
    }

    // ── U ── Index+middle UP and CLOSE TOGETHER
    case 'U': {
        const two=c.indexExtended&&c.middleExtended;
        const rCl=!c.ringExtended&&!c.pinkyExtended;
        const cl=c.idxMidSep<0.032;
        if (two&&rCl&&cl&&c.fingersPointingUp) return 93;
        if (two&&rCl&&cl)                      return 82;
        if (two&&rCl&&c.idxMidSep<0.048)       return 65;
        if (two&&rCl)                           return 50;
        return 12;
    }

    // ── V ── Index+middle UP and CLEARLY SEPARATED
    case 'V': {
        const two=c.indexExtended&&c.middleExtended;
        const rCl=!c.ringExtended&&!c.pinkyExtended;
        if (two&&rCl&&c.idxMidSep>0.042) return 94;
        if (two&&rCl&&c.idxMidSep>0.026) return 75;
        if (two&&rCl)                     return 50;
        return 12;
    }

    // ── W ── Index+middle+ring UP; pinky curled
    case 'W': {
        const three=c.indexExtended&&c.middleExtended&&c.ringExtended;
        const pCurl=!c.pinkyExtended&&c.pinkyCurled;
        const pDown=!c.pinkyExtended;
        if (three&&pCurl) return 93;
        if (three&&pDown) return 80;
        if (c.extendedCount>=3&&pDown) return 65;
        return 18;
    }

    // ── X ── Index finger HOOKED (not fully up, not fully curled)
    case 'X': {
        const hook=!c.indexExtended&&c.iT.y<c.iP.y+0.02&&c.iT.y>c.iM.y-0.07;
        const rCurl=c.middleCurled&&c.ringCurled&&c.pinkyCurled;
        const rCl=!c.middleExtended&&!c.ringExtended&&!c.pinkyExtended;
        if (hook&&rCurl)                           return 88;
        if (hook&&rCl)                             return 76;
        if (!c.indexExtended&&rCl&&!c.indexCurled) return 62;
        if (!c.indexExtended&&rCl)                 return 48;
        return 12;
    }

    // ── Y ── Thumb LATERAL + pinky UP; index/middle/ring curled
    case 'Y': {
        const pH=(c.pM.y-c.pT.y)>0.06;
        const tOut=Math.abs(c.tT.x-c.tM.x)>0.055||c.thumbExtended;
        const mCurl=c.indexCurled&&c.middleCurled&&c.ringCurled;
        const mDwn=!c.indexExtended&&!c.middleExtended&&!c.ringExtended;
        const sprd=Math.hypot(c.tT.x-c.pT.x,c.tT.y-c.pT.y);
        if (pH&&tOut&&mCurl&&sprd>0.16) return 96;
        if (pH&&tOut&&mCurl)            return 86;
        if (pH&&tOut&&mDwn)             return 76;
        if (pH&&tOut)                   return 62;
        if (c.pinkyExtended&&c.thumbExtended&&!c.indexExtended&&!c.middleExtended&&!c.ringExtended) return 68;
        return 10;
    }

    // ── Z ── Index up only; draws Z in the air (static = same as D)
    case 'Z': {
        const only=c.indexExtended&&!c.middleExtended&&!c.ringExtended&&!c.pinkyExtended;
        const curl=c.middleCurled&&c.ringCurled&&c.pinkyCurled;
        if (only&&curl) return 82;
        if (only)       return 68;
        if (c.indexExtended&&c.extendedCount<=2) return 48;
        return 12;
    }

    default: return 40;
    }
}

// MEDIAPIPE CALLBACK

function onMediaPipeResults(results) {
    const video = document.getElementById('practiceVideo');
    const canvas= document.getElementById('practiceCanvas');
    const ctx   = canvas.getContext('2d');
    const dbg   = document.getElementById('orientationDebug');

    if (!video.videoWidth||!video.videoHeight) return;
    canvas.width=video.videoWidth; canvas.height=video.videoHeight;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(results.image,0,0,canvas.width,canvas.height);

    if (results.multiHandLandmarks?.length>0 && practiceLetter) {
        const lm=results.multiHandLandmarks[0];
        if (typeof drawConnectors==='function'&&typeof HAND_CONNECTIONS!=='undefined') {
            drawConnectors(ctx,lm,HAND_CONNECTIONS,{color:'#3b4cca',lineWidth:3});
            drawLandmarks(ctx,lm,{color:'#f59e0b',lineWidth:2,radius:4});
        }
        const ori=detectHandOrientation(lm);
        const cfg=getFingerConfiguration(lm);

        function dbgCurv(tip, pip, mcp) {
            const d1 = Math.hypot(tip.x-mcp.x, tip.y-mcp.y);
            const d2 = Math.hypot(pip.x-mcp.x, pip.y-mcp.y);
            return d2 > 0.001 ? (d1/d2).toFixed(2) : '?';
        }
        const cI = dbgCurv(cfg.iT,cfg.iP,cfg.iM);
        const cM = dbgCurv(cfg.mT,cfg.mP,cfg.mM);
        const cR = dbgCurv(cfg.rT,cfg.rP,cfg.rM);
        const dy_rm_v = (cfg.rT.y - cfg.mT.y).toFixed(3);
        dbg.textContent = `${practiceLetter} | Ext:${cfg.extendedCount} | TLat:${cfg.thumbLateral} | curvI:${cI} curvM:${cM} curvR:${cR} | dy_rm:${dy_rm_v}`;

        const acc=analyzeHandShapeForLetter(lm,practiceLetter);

        if (acc>=50) {
            updatePracticeFeedback('correct',`Excellent! Correct sign for ${practiceLetter} (${acc}% accuracy)`,acc);
            localStorage.setItem('iaPoints', parseInt(localStorage.getItem('iaPoints')||0)+10);
        } else {
            let msg=`The sign does not match ${practiceLetter}. Accuracy: ${acc}% (minimum 50%). `;
            if ((practiceLetter==='K'||practiceLetter==='P')&&acc<40)
                msg+=`Fingers must point ${practiceLetter==='K'?'UP ☝️':'DOWN 👇'}.`;
            if (practiceLetter==='T'&&acc<40)
                msg+=`Push your thumb UP between index and middle finger.`;
            if (practiceLetter==='M'&&acc<40)
                msg+=`Keep index, middle AND ring fingers at the same height over the thumb.`;
            if (practiceLetter==='N'&&acc<40)
                msg+=`Only index and middle over the thumb — ring finger stays lower.`;
            updatePracticeFeedback('incorrect',msg,acc);
        }

    } else if (!practiceLetter) {
        updatePracticeFeedback('waiting','Select a letter first',0);
        document.getElementById('orientationDebug').textContent='Select a letter';
    } else {
        updatePracticeFeedback('waiting','🖐️ Hand not detected. Place your hand in front of the camera',0);
        document.getElementById('orientationDebug').textContent='No hand detected';
    }
}


// CAMERA
function startPracticeCamera() {
    if (isCameraRunning) return;
    const video=document.getElementById('practiceVideo');
    document.getElementById('cameraOverlay').style.display='none';
    handsInstance=new Hands({locateFile:f=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${f}`});
    handsInstance.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:0.5,minTrackingConfidence:0.5});
    handsInstance.onResults(onMediaPipeResults);
    cameraInstance=new Camera(video,{
        onFrame:async()=>{if(handsInstance&&video?.videoWidth>0)await handsInstance.send({image:video});},
        width:640,height:480
    });
    cameraInstance.start()
        .then(()=>{isCameraRunning=true;})
        .catch(err=>{console.error(err);updatePracticeFeedback('incorrect','Error accessing camera. Check permissions.',0);});
}

function stopCameraIfNeeded() {
    if (cameraInstance){cameraInstance.stop();isCameraRunning=false;}
    if (handsInstance) handsInstance.close();
}

window.addEventListener('beforeunload',stopCameraIfNeeded);

// ----- LECTURA DE LETRA DESDE LA URL Y RESALTADO ACTIVO -----
document.addEventListener('DOMContentLoaded', () => {
    // 1. Renderizar el selector de letras normalmente
    renderPracticeSelect();

    // 2. Leer el parámetro 'letra' de la URL
    const params = new URLSearchParams(window.location.search);
    const letraDesdeURL = params.get('letra');

    // 3. Si hay una letra válida, establecerla automáticamente
    if (letraDesdeURL && lessaAlphabet[letraDesdeURL]) {
        setTimeout(() => {
            setPracticeLetter(letraDesdeURL);
            // Opcional: inicia la cámara automáticamente (quita el comentario si lo deseas)
            // startPracticeCamera();
        }, 100);
    }
});