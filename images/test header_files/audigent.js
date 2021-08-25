if (typeof (au_seg) != 'undefined') {
    au_segments = au_seg.segments || [];
    googletag.cmd.push(function () {
        googletag.pubads().setTargeting('AU_SEG', au_segments);
    });
}
