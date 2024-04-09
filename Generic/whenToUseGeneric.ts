interface Animal {
    name: string;
}

interface Human {
    firstName: string;
    lastName: string;
}

export const getdisplayName = <TItem extends Animal | Human>(item: TItem): string => {
    if ("name" in item) {
        return item.name;
    } else {
        if (!item.firstName || !item.lastName) {
            throw new Error("Missing firstName or lastName for Human object");
        }
        return `${item.firstName} ${item.lastName}`;
    }
};



const result = getdisplayName({
    name: "Patch",
});

const result2 = getdisplayName({
    firstName: "Aritra",
    lastName: "Banerjee",
});
