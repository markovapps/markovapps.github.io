import { Divider } from "@nextui-org/divider";
import React from "react";

import { bodyText, subtitle, title } from "@/components/primitives";
import { HeroSection } from "@/components/HeroSection";
import Slider from "../../components/Slider";
import Benefits from "../../components/Benefits";
import Screenshots from "../../components/Screenshots";
import UserReviews from "../../components/UserReviews";
import CallToAction from "../../components/CallToAction";

export default function TimeSheetPage() {
  return (
    <>
        <Slider/>
        <Benefits/>
        <Screenshots/>
        <UserReviews/>
        <CallToAction/>

      <section className="text-center">
        <p className={bodyText({ size: "md" })}>
          Приложение для учета отработанных часов и расчета заработной платы для
          работников с почасовой оплатой и гибким графиком. Фиксируйте рабочие
          часы и переработки в удобном календаре и приложение автоматически
          рассчитает ваш доход. Добавлена поддержка популярных графиков смен,
          таких как &quot;два через два&quot;, &quot;сутки трое&quot;. Подходит
          для работников вахтовым методом и со скользящим графиком. Календарь
          рабочего времени очень прост и удобен в использовании. Табель учета
          рабочего времени помогает эффективно управлять рабочим временем и
          доходами, делая учет и планирование максимально удобным и простым.
        </p>
      </section>

    </>
  );
}
