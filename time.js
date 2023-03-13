function grade(score) {
    if (score >= 90)
        return "A";
    if (score >= 80)
        return "B";
    if (score >= 70)
        return "C";
    if (score >= 60)
        return "D";
    else
        return "F";
}

const SCALE = ["F", "F", "F", "F", "F", "F", "D", "C", "B", "A"]

function grade1(score) {
    score = Math.max(Math.min(score, 100.0), 0.0);
    return SCALE[Math.floor(score/10.0)];
}