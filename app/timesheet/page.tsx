import { bodyText, subtitle, title } from "@/components/primitives";
import { Box } from "@/styles/box";
import { Flex } from "@/styles/flex";
import { Code } from "@nextui-org/code";
import { Snippet } from "@nextui-org/snippet";
import { Divider } from "@nextui-org/divider";

export default function PricingPage() {
  return (<>
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

      <p className={bodyText({ size: 'md'})}>
        Приложение для учета отработанных часов и расчета заработной платы для работников с почасовой оплатой и гибким графиком.
        Фиксируйте рабочие часы и переработки в удобном календаре и приложение автоматически рассчитает ваш доход.
        Добавлена поддержка популярных графиков смен, таких как "два через два", "сутки трое". Подходит для работников вахтовым методом и со скользящим графиком.
        Календарь рабочего времени очень прост и удобен в использовании. Табель учета рабочего времени помогает эффективно управлять рабочим временем и доходами, делая учет и планирование максимально удобным и простым.
      </p>
    </section>

    <Divider />
  </>
  );
}
