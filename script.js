function ask() {
    let q = document.getElementById("question").value.toLowerCase();
    let answer = "";

    // GYM related
    if(q.includes("gym") || q.includes("workout") || q.includes("weights") || q.includes("lifting")){
        answer = "For gym, focus on compound exercises like bench press, squats, and deadlifts. Train 4-5 days per week.";
    }
    // CALISTHENICS related
    else if(q.includes("calisthenics") || q.includes("bodyweight") || q.includes("pushups") || q.includes("pullups")){
        answer = "For calisthenics, start with pushups, pullups, dips, and planks. Gradually increase reps and difficulty.";
    }
    // DIET / PROTEIN
    else if(q.includes("diet") || q.includes("protein") || q.includes("meal") || q.includes("nutrition")){
        answer = "Maintain a balanced diet with protein-rich foods like eggs, chicken, paneer, and milk. Eat 1.6g protein per kg bodyweight daily.";
    }
    // FAT LOSS
    else if(q.includes("fat") || q.includes("lose weight") || q.includes("shredded") || q.includes("cutting")){
        answer = "For fat loss, maintain a calorie deficit, combine cardio with resistance training, and eat high-protein foods.";
    }
    // LEAN MUSCLE / BULK
    else if(q.includes("muscle") || q.includes("bulk") || q.includes("gain weight")){
        answer = "For lean muscle gain, follow a progressive strength training program with sufficient protein and calories.";
    }
    // GENERAL ADVICE
    else {
        answer = "Follow the workout and diet plans. Ask about Gym, Calisthenics, Diet, or Fat Loss for more detailed answers.";
    }

    document.getElementById("answer").innerText = answer;
}
