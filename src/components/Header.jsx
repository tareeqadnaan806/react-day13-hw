import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto px-4 py-5 space-y-12">
      <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl">
        <div className="flex flex-col gap-6 p-8 md:p-10">
          <div className="flex flex-col items-center gap-4 md:justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://st4.depositphotos.com/4396953/19860/v/450/depositphotos_198602274-stock-illustration-gym-or-fitness-logo-sign.jpg"
                alt="BodyRevive logo"
                className="w-20 rounded-full bg-white/10 p-2"
              />
              <h1 className="text-4xl font-momo font-bold tracking-wide">
                BodyRevive
              </h1>
            </div>
            <p className="max-w-xl text-center text-lg font-medium text-slate-100">
              Where Fitness Meets Fun and Results Are Achieved
            </p>
          </div>
          <p className="text-center text-xl font-semibold text-slate-100 md:text-2xl">
            Welcome to the Men's Ultimate Fitness Transformation Course!
          </p>
          <div className="grid gap-4 md:gap-3">
            <div className="overflow-hidden rounded-2xl bg-white/10 p-2 shadow-lg backdrop-blur-sm">
              <img
                src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt="Gym motivation"
              />
            </div>
            <div className="overflow-hidden rounded-2xl bg-white/10 p-2 shadow-lg backdrop-blur-sm">
              <img
                src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt="Training focus"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex flex-col gap-8 lg:grid lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-8 shadow-xl backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Program Roadmap
          </h2>
          <p className="mt-3 text-slate-600">
            This program is designed to help you:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            <li>Lose body fat.</li>
            <li>Build solid muscle.</li>
            <li>Increase strength.</li>
            <li>Improve stamina.</li>
            <li>Transform your physique in twelve weeks.</li>
          </ul>
          <p className="mt-4 text-slate-600">
            Whether you are training at home or at the gym, this course guides
            you step by step.
          </p>
        </div>
        <div className="rounded-2xl bg-gradient-to-b from-orange-50 via-white to-slate-100 p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-slate-900">
            Module 1: Understanding Your Body
          </h2>
          <p className="mt-3 text-slate-700">
            Men typically gain and lose fat differently, so strategy matters.
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl bg-white/70 p-4 shadow-inner">
              <p className="font-semibold text-slate-900">Fat Storage</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700">
                <li>
                  Most excess fat gathers around the belly, chest, and lower
                  back.
                </li>
                <li>The belly is usually the first place fat appears.</li>
                <li>
                  The belly is also the last place fat leaves, which is
                  completely normal.
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-white/70 p-4 shadow-inner">
              <p className="font-semibold text-slate-900">Metabolism Basics</p>
              <p className="mt-2 text-slate-700">Your daily burn depends on:</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-700">
                <li>Muscle mass.</li>
                <li>Activity level.</li>
                <li>Sleep quality.</li>
                <li>Stress management.</li>
                <li>Age.</li>
              </ul>
              <p className="mt-3 rounded-lg bg-slate-900/70 p-3 text-sm font-semibold text-white">
                Build more muscle for a faster metabolism and quicker fat loss.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-gradient-to-r from-sky-100 via-white to-emerald-100 p-8 shadow-xl">
        <h2 className="text-2xl font-semibold text-slate-900">
          How to Track Progress
        </h2>
        <p className="mt-3 text-slate-700">
          Turn progress into motivation with these simple weekly habits.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h3 className="text-lg font-semibold text-slate-900">
              Weekly Photos
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Capture front, side, and back shots every week to see definition
              improve.
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h3 className="text-lg font-semibold text-slate-900">
              Tape Measurements
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Track chest, waist, hips, and arms so you know exactly where you
              are tightening up.
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h3 className="text-lg font-semibold text-slate-900">
              Scale Check
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Weigh in once per week to confirm your calorie strategy is on
              point.
            </p>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-md">
            <h3 className="text-lg font-semibold text-slate-900">
              Mirror Feedback
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Let the mirror reveal posture, muscle fullness, and definition
              beyond the numbers.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-2xl">
          <h2 className="text-3xl font-semibold">
            Module 2: Diet &amp; Nutrition for Men
          </h2>
          <p className="mt-3 text-lg text-slate-200">
            Fuel your training with smart nutrition. These guides keep meals
            practical while matching your goal.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h3 className="text-2xl font-semibold text-slate-900">
            2.1 The Basics of Diet
          </h3>
          <p className="mt-2 text-base text-slate-600">
            Master the fundamentals so every plate moves you closer to lean
            muscle and lower body fat.
          </p>
          <div className="mt-6 grid gap-6">
            <div className="rounded-2xl bg-gradient-to-b from-emerald-50 to-emerald-100 p-5 shadow-md">
              <h4 className="text-xl font-semibold text-slate-900">
                Calorie Deficit
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Choose this setting when fat loss is the priority.
              </p>
              <p className="mt-3 font-semibold text-slate-900">
                Calories in &lt; calories out.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-b from-amber-50 to-orange-100 p-5 shadow-md">
              <h4 className="text-xl font-semibold text-slate-900">
                Calorie Surplus
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Lean muscle thrives when you have a slight calorie surplus.
              </p>
              <p className="mt-3 font-semibold text-slate-900">
                Calories in &gt; calories out.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-b from-slate-50 to-slate-200 p-5 shadow-md">
              <h4 className="text-xl font-semibold text-slate-900">
                Protein Goal
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Protein keeps you full, repairs muscle, and protects strength.
              </p>
              <p className="mt-3 font-semibold text-slate-900">
                Target 1.6 to 2 g per kg body weight.
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Example: 75 kg target equals roughly 120 to 150 g per day.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-r from-orange-50 via-white to-amber-100 p-8 shadow-xl">
          <h3 className="text-2xl font-semibold text-slate-900">
            2.2 Daily Meal Plan for Men
          </h3>
          <p className="mt-2 text-base text-slate-600">
            Mix and match these sample meals to stay energized without
            overthinking what to cook.
          </p>
          <div className="mt-6 grid gap-6">
            <div className="rounded-2xl bg-white/80 p-5 shadow-md">
              <h4 className="text-xl font-semibold text-slate-900">
                Fat Loss Focus
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Light, high protein meals that keep hunger away.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Breakfast: Oats with eggs or poha with peanuts.</li>
                <li>Lunch: Roti, dal, and mixed vegetables.</li>
                <li>Snack: Seasonal fruit with black coffee.</li>
                <li>Dinner: Chicken, fish, or paneer plus vegetables.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/80 p-5 shadow-md">
              <h4 className="text-xl font-semibold text-slate-900">
                Muscle Gain Focus
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Extra calories from whole foods support muscle growth.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Breakfast: Four eggs, oats, and fruit.</li>
                <li>Lunch: Rice with chicken, fish, or paneer.</li>
                <li>Snack: Nuts with a banana shake.</li>
                <li>
                  Dinner: Roti or rice paired with your protein and vegetables.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h3 className="text-2xl font-semibold text-slate-900">
            2.3 Seven Day Indian Meal Flow
          </h3>
          <p className="mt-2 text-base text-slate-600">
            Rotate vegetarian and non-vegetarian options through the week for
            flavor, balance, and consistency.
          </p>
          <div className="mt-6 grid gap-6">
            <div className="rounded-2xl bg-slate-50 p-5 shadow-md">
              <h4 className="text-xl font-semibold text-slate-900">
                Day 1 Sample (Veg)
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Balanced plates for steady energy all day.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Breakfast: Moong dal chilla with chutney.</li>
                <li>Lunch: Dal, vegetable curry, and two roti.</li>
                <li>Snack: Sprouts with lemon and spice.</li>
                <li>Dinner: Paneer with crisp salad.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5 shadow-md">
              <h4 className="text-xl font-semibold text-slate-900">
                Day 1 Sample (Non Veg)
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Lean proteins keep recovery and muscle gain on track.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Breakfast: Oats with three eggs.</li>
                <li>Lunch: Steamed rice and chicken curry.</li>
                <li>Snack: Fresh fruit of choice.</li>
                <li>Dinner: Grilled fish with sauteed vegetables.</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Repeat the structure with different proteins, grains, and vegetable
            sides through the week to stay consistent without getting bored.
          </p>
        </div>
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-xl">
          <h3 className="text-2xl font-semibold">2.4 Supplements Guide</h3>
          <p className="mt-2 text-base text-slate-200">
            Supplements can support your plan but they are never a substitute
            for whole foods or consistency.
          </p>
          <div className="mt-6 grid gap-6">
            <div className="rounded-2xl bg-white/10 p-5 shadow-inner">
              <h4 className="text-xl font-semibold text-white">
                Optional Helpers
              </h4>
              <p className="mt-2 text-sm text-slate-200">
                Use these essentials when your daily diet needs an extra boost.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-100">
                <li>Whey protein to hit your protein target.</li>
                <li>Creatine monohydrate (3-5 g per day).</li>
                <li>Daily multivitamin for micronutrient insurance.</li>
                <li>Omega-3 for heart and joint health.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/10 p-5 shadow-inner">
              <h4 className="text-xl font-semibold text-white">Skip These</h4>
              <p className="mt-2 text-sm text-slate-200">
                Fast results gimmicks often do more harm than good.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-100">
                <li>Fat burners and detox pills.</li>
                <li>Steroids or prohormones.</li>
                <li>Testosterone boosters.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-sky-100 p-8 shadow-xl">
          <h3 className="text-2xl font-semibold text-slate-900">
            2.5 Cravings and Binge Control
          </h3>
          <p className="mt-2 text-base text-slate-600">
            Dial in these habits so hunger stays steady and binge urges fade.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h4 className="text-lg font-semibold text-slate-900">
                Hydrate Smarter
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Drink a glass of water before meals to calm appetite and improve
                digestion.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h4 className="text-lg font-semibold text-slate-900">
                Prioritize Protein
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Add lean protein to every meal to stay full longer and reduce
                cravings.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h4 className="text-lg font-semibold text-slate-900">
                Sleep &amp; Environment
              </h4>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Sleep 7-8 hours nightly.</li>
                <li>Remove tempting junk foods from the house.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h4 className="text-lg font-semibold text-slate-900">
                Sweet Swap
              </h4>
              <p className="mt-2 text-sm text-slate-700">
                Reach for whole fruit when a sugar craving hits to satisfy taste
                and add fiber.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900 p-8 text-white shadow-2xl">
          <h2 className="text-3xl font-semibold">
            Module 3: Home Workout Training (Men)
          </h2>
          <p className="mt-3 text-lg text-indigo-100">
            No equipment? No problem. Crush these guided routines anywhere with
            just your bodyweight and determination.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <img
              src="https://media.istockphoto.com/id/1323052082/photo/shot-of-a-sporty-young-man-doing-exercise-and-stretching-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=MXnfb-ylXuHu4Mm7H7fAYP-RREKASh1Xi4mvrlkjQdA="
              alt="Beginner home workout"
              className="h-40 w-full rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              3.1 Full Body Beginner • 10 Min
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Build momentum with a quick whole-body primer. Move continuously
              and focus on clean form.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Jumping jacks – 30 sec</li>
              <li>Push-ups – 10 reps</li>
              <li>Squats – 15 reps</li>
              <li>Mountain climbers – 30 sec</li>
              <li>Plank – 20 sec</li>
              <li>Repeat twice</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1726768921462-718913c49de7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnVycGVlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Intermediate push-up workout"
              className="h-40 w-full rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              3.2 Full Body Intermediate • 20 Min
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Level up volume and intensity with classic bodyweight supersets.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Push-ups – 3 × 12</li>
              <li>Squats – 3 × 20</li>
              <li>Lunges – 3 × 12 each leg</li>
              <li>Burpees – 3 × 10</li>
              <li>Plank – 45 sec</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <img
              src="https://media.istockphoto.com/id/1311464336/photo/sportsman-practicing-mountain-climbing-exercise.webp?a=1&b=1&s=612x612&w=0&k=20&c=q6ZcHinqwkxGbG6i6hvvuMPEgCxW7tBlyVFajh-0bqM="
              alt="HIIT cardio workout"
              className="h-35 w-full rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              3.3 HIIT Fat Burner • 15 Min
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Alternate 40 seconds of all-out work with 20 seconds of recovery
              for metabolic fire.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>High knees</li>
              <li>Squat jumps</li>
              <li>Push-ups</li>
              <li>Mountain climbers</li>
              <li>Burpees</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <img
              src="https://media.istockphoto.com/id/2244738558/photo/man-knee-raise-and-exercise-in-home-with-fitness-routine-wellness-and-training-in-lounge.jpg?s=612x612&w=0&k=20&c=s1-gvWKBrTR1Urs-9mUKMX5Dz_3PEu0qfj0MMaIbX9Q="
              alt="Core workout at home"
              className="h-40 w-full rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              3.4 Abs Workout • 10 Min
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Carve your midsection with controlled reps and steady breathing.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Crunches – 15 reps</li>
              <li>Leg raises – 12 reps</li>
              <li>Plank – 40 sec</li>
              <li>Russian twists – 20 reps</li>
              <li>Repeat twice</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <img
              src="data:image/jpeg;base64,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"
              alt="Chest push-up variations"
              className="h-40 w-full rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              3.5 Chest Power Without Equipment
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Stack push-up variations to overload the chest and triceps.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Normal push-ups – 3 × 12</li>
              <li>Wide push-ups – 3 × 12</li>
              <li>Decline push-ups – 3 × 10</li>
              <li>Hindu push-ups – 2 × 12</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <img
              src="data:image/jpeg;base64,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"
              alt="Back and shoulder workout"
              className="h-35 w-full rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              3.6 Back &amp; Shoulders at Home
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Strengthen posture muscles with focused bodyweight moves.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Superman – 3 × 15</li>
              <li>Pike push-ups – 3 × 10</li>
              <li>Y-T raises (floor) – 3 × 12</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <img
              src="data:image/jpeg;base64,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"
              alt="Leg workout at home"
              className="h-40 w-full rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              3.7 Leg Blast at Home
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Build powerful legs and endurance with repeatable sets.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Squats – 4 × 20</li>
              <li>Lunges – 3 × 15 each side</li>
              <li>Wall sit – 1 minute</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <img
              src="data:image/jpeg;base64,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"
              alt="Daily stretching routine"
              className="h-37 w-full rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              3.8 Daily Stretch Routine
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Reset and recover every day with these mobility staples.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Hamstring stretch – 30 sec</li>
              <li>Shoulder stretch – 30 sec</li>
              <li>Chest stretch – 30 sec</li>
              <li>Lower back stretch – 30 sec</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
