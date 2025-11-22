import React from "react";
import workouts from "../workout.json";

const formatKey = (key) => {
  const match = key.match(/([a-zA-Z]+)(\d+)/);
  if (match) {
    const [, label, value] = match;
    return `${label.charAt(0).toUpperCase() + label.slice(1)} ${value}`;
  }
  return key.charAt(0).toUpperCase() + key.slice(1);
};

const getDayOrder = (dayKey) => {
  const order = parseInt(dayKey.replace(/\D/g, ""), 10);
  return Number.isNaN(order) ? 0 : order;
};

const formatExerciseName = (name = "") =>
  name.replace(/\b[a-z]/g, (char) => char.toUpperCase());

const Hero = () => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="container mx-auto px-4 space-y-12">
        <header className="mx-auto max-w-3xl text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            12 Week Back Strength Blueprint
          </h1>
          <p className="text-base text-slate-600 md:text-lg">
            Follow the structured pull and posterior chain sessions crafted to
            build strength, improve posture, and keep recovery on track. Each
            card outlines the exact flow for the day so you can train with
            confidence.
          </p>
        </header>

        <div className="space-y-10">
          {workouts.map((weekBlock) => {
            const [weekKey, days] = Object.entries(weekBlock)[0];
            const weekLabel = formatKey(weekKey);
            const dayEntries = Object.entries(days || {}).sort(
              ([dayA], [dayB]) => getDayOrder(dayA) - getDayOrder(dayB)
            );

            return (
              <article
                key={weekKey}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl md:p-10"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div className="space-y-2">
                    <span className="inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      Weekly Split
                    </span>
                    <h2 className="text-3xl font-semibold text-slate-900">
                      {weekLabel}
                    </h2>
                    <p className="text-sm text-slate-600">
                      Back-dominant strength, rowing variations, and spinal
                      stability work to keep progress compounding.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6">
                  {dayEntries.map(([dayKey, exercises]) => {
                    const dayLabel = formatKey(dayKey);
                    return (
                      <div
                        key={dayKey}
                        className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-inner"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-slate-900">
                            {dayLabel}
                          </h3>
                          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Session
                          </span>
                        </div>

                        <ul className="space-y-3">
                          {(exercises || []).map((exercise, idx) => (
                            <li
                              key={`${exercise.name}-${idx}`}
                              className="flex gap-3 rounded-xl bg-white/70 p-3 shadow-sm"
                            >
                              <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                  <p className="text-sm font-semibold text-slate-900">
                                    {formatExerciseName(exercise.name)}
                                  </p>
                                  {exercise.time && (
                                    <span className="self-start shrink-0 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                                      {exercise.time} min
                                    </span>
                                  )}
                                </div>
                                <p>
                                  {exercise.gifUrl && (
                                    <img
                                      src={exercise.gifUrl}
                                      alt={`${exercise.name} demonstration`}
                                      loading="lazy"
                                      className=" shrink-0 rounded-lg object-cover shadow mt-2 mb-2 "
                                      style={{ border: "1px solid black" }}
                                    />
                                  )}
                                </p>
                                <p>
                                  {exercise?.description && (
                                    <p>{exercise.description}</p>
                                  )}
                                </p>
                                <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                                  {exercise.category && (
                                    <span className="rounded-full bg-slate-200 px-2 py-0.5 capitalize text-slate-700">
                                      {exercise.category}
                                    </span>
                                  )}
                                  {exercise.difficulty && (
                                    <span className="rounded-full bg-slate-200 px-2 py-0.5 capitalize text-slate-700">
                                      {exercise.difficulty}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
