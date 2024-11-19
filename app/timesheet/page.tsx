import { Divider } from "@nextui-org/divider";

import { bodyText, subtitle, title } from "@/components/primitives";

export default function PricingPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title({ color: "violet" })}>Timesheet </span>
          <span className={title()}>календарь рабочего времени</span>

          <div className={subtitle({ class: "mt-4" })}>
            Отслеживание отработанного времени и дохода при почасовой оплате
          </div>
        </div>
      </section>

      <Divider />

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

      <Divider />
    </>
  );
}
