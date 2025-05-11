import React from "react";

import * as icons from "@tabler/icons-react";

export const CategoriesIcons = ({
    category,
    ...other
}: { category: string } & React.ComponentProps<typeof icons.IconCashBanknote>) => {
    const categoryIconMap: Record<string, keyof typeof icons> = {
        // Доходы
        Зарплата: "IconCashBanknote",
        "Дополнительный доход": "IconCoin",
        Подарки: "IconGift",
        Инвестиции: "IconChartLine",
        Аренда: "IconHomeDollar",
        Премии: "IconMedal",
        Фриланс: "IconDeviceLaptop",
        "Продажа товаров/услуг": "IconShoppingCart",
        "Проценты по вкладам": "IconPercentage",
        "Государственные пособия": "IconBuildingBank",
        Дивиденды: "IconGrowth",
        "Возврат налогов": "IconReceiptRefund",
        Стипендия: "IconSchool",
        Пенсия: "IconHeartHandshake",
        "Прочие доходы": "IconCoin",

        // Расходы
        "Продукты питания": "IconToolsKitchen",
        "Жилищные расходы": "IconHome",
        Транспорт: "IconCar",
        "Коммунальные услуги": "IconBulb",
        Развлечения: "IconMovie",
        "Одежда и обувь": "IconShirt",
        Здоровье: "IconHeartbeat",
        Образование: "IconBook",
        Связь: "IconPhone",
        "Кредиты и займы": "IconCashBanknoteOff",
        "Спорт и фитнес": "IconGymnastics",
        Путешествия: "IconPlane",
        "Косметика и уход": "IconBrush",
        "Домашние животные": "IconPaw",
        "Прочие расходы": "IconCoinOff",

        Перевод: "IconRepeat",
    };

    const IconName = categoryIconMap[category] || "IconMan";
    const IconComponent = icons[IconName] as React.ElementType;

    return IconComponent ? <IconComponent {...other} /> : null;
};
