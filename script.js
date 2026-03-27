function show(id){

document.querySelectorAll('.section')
.forEach(sec=>sec.style.display='none')

document.getElementById(id).style.display='block'

}

function calc(){

let w=document.getElementById("weight").value

let protein=w*1.6

document.getElementById("protein")
.innerText="You need "+protein+"g protein daily"

}

function ask() {
    let q = document.getElementById("question").value.toLowerCase();
    let answer = "";

    // Gym-related queries
    if(q.includes("gym") || q.includes("workout") || q.includes("weights") || q.includes("lifting") || q.includes("routine")){
        if(q.includes("start") || q.includes("beginner")){
            answer = "Start with light weights, focus on form, and train 3-4 days per week. Include compound exercises like bench press, squats, and deadlifts.";
        } else if(q.includes("chest")){
            answer = "For chest, do bench press, incline dumbbell press, and chest flys. 3-4 sets of 8-12 reps.";
        } else if(q.includes("legs")){
            answer = "For legs, include squats, lunges, leg press, and calf raises. Focus on proper form and progressive overload.";
        } else {
            answer = "Follow a balanced gym routine including push, pull, and leg days. Include compound lifts and progressively increase weights.";
        }
    }

    // Calisthenics-related queries
    else if(q.includes("calisthenics") || q.includes("bodyweight") || q.includes("pushups") || q.includes("pullups") || q.includes("dips")){
        if(q.includes("start") || q.includes("beginner")){
            answer = "Start with basic bodyweight exercises: pushups, squats, pullups, dips, and planks. Do 3-4 sets daily, gradually increasing reps.";
        } else if(q.includes("advanced") || q.includes("progression")){
            answer = "Try advanced moves like muscle-ups, handstand pushups, planches, and one-arm pushups. Progress slowly and master the basics first.";
        } else {
            answer = "Calisthenics focuses on bodyweight strength. Mix push, pull, leg, and core exercises for balanced progress.";
        }
    }

    // Diet / Nutrition queries
    else if(q.includes("diet") || q.includes("protein") || q.includes("meal") || q.includes("nutrition") || q.includes("calories") || q.includes("macros")){
        if(q.includes("protein") || q.includes("muscle")){
            answer = "Eat protein-rich foods: eggs, chicken, paneer, lentils, and milk. Target ~1.6-2g protein per kg of bodyweight daily.";
        } else if(q.includes("fat loss") || q.includes("cutting") || q.includes("lose weight")){
            answer = "Maintain a slight calorie deficit, focus on protein intake, include vegetables and whole grains, and do cardio + strength training.";
        } else if(q.includes("meal plan")){
            answer = "A sample daily plan: Breakfast- eggs/ oats, Lunch- chicken/ paneer + rice, Snack- fruits/ nuts, Dinner- lean protein + veggies.";
        } else {
            answer = "Eat a balanced diet with protein, carbs, and healthy fats. Hydrate well and avoid processed foods for optimal fitness.";
        }
    }

    // Fat loss / Shredding
    else if(q.includes("fat") || q.includes("lose weight") || q.includes("cutting") || q.includes("shredded") || q.includes("body fat")){
        answer = "For fat loss, maintain a calorie deficit, include HIIT or cardio, strength train to preserve muscle, and eat protein-rich meals.";
    }

    // Muscle gain / Bulk
    else if(q.includes("muscle") || q.includes("bulk") || q.includes("gain weight") || q.includes("lean bulk")){
        answer = "For lean muscle gain, follow a progressive strength training program, eat a slight calorie surplus, and focus on high-protein foods.";
    }

    // Recovery / Rest
    else if(q.includes("rest") || q.includes("recovery") || q.includes("sleep")){
        answer = "Recovery is important: aim 7-9 hours of sleep, rest muscles between workouts, and do light stretching or yoga.";
    }

    // Supplements
    else if(q.includes("supplements") || q.includes("creatine") || q.includes("protein powder") || q.includes("bcaa")){
        answer = "Supplements can help, but focus on whole foods first. Use whey protein, creatine, or BCAAs if needed after consulting a professional.";
    }

    // General fallback
    else {
        answer = "I can answer questions about Gym, Calisthenics, Diet, Fat Loss, Muscle Gain, Recovery, and Supplements. Ask anything related!";
    }

    document.getElementById("answer").innerText = answer;
}
