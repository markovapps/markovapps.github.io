import { Divider } from "@nextui-org/divider";

import { bodyText, title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <div className={title({ color: "green" })}>Welpeny </div> <br />
          <div className={title({ size: "sm" })}>
            приложение для отслеживания доходов и расходов
          </div>
        </div>
      </section>

      <Divider />

      <section className="flex flex-col items-center justify-center gap-4 ">
        <div className={bodyText({ size: "md" })}>
          Это удобное приложение поможет вам эффективно управлять своими
          финансами. Вносите доходы и расходы, присваивайте им категории и
          следите за своими денежными потоками в одном месте. Приложение
          позволяет легко:
          <ul
            className="list-disc mr-24 "
            style={{ listStyleType: "circle", paddingLeft: "20px" }}
          >
            <li>Вводить суммы заработков и трат</li>
            <li>
              Присваивать транзакциям соответствующие категории (например,
              &quot;Еда&quot;, &quot;Транспорт&quot;, &quot;Развлечения&quot;)
            </li>
            <li>
              Просматривать детализированную статистику по категориям за любой
              выбранный период
            </li>
            <li>
              Указывать разные валюты для транзакций и задавать актуальный курс
              валют для автоматического пересчета и отображения статистики в
              одной выбранной валюте
            </li>
          </ul>
          Теперь управление личным бюджетом станет проще и нагляднее!
        </div>
      </section>

      <Divider />
    </>
  );
}
