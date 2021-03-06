const _ = require('lodash')

let data = [
    {
        userID: ["user1", "public"],
        receiptID: 2021070712345,
        itemName: "Apple",
        itemCategory: "Others",
        itemPrice: 1,
        itemPriceTotal: 12,
        itemQuantityAtUpload: 12,
        itemQuantityUpdatedByUser: 12,
        deletedByUser: true,
    },
    {
        userID: ["user1", "public"],
        receiptID: 2021070712346,
        itemName: "Pear",
        itemCategory: "Others",
        itemPrice: 3,
        itemPriceTotal: 12,
        itemQuantityAtUpload: 4,
        itemQuantityUpdatedByUser: 4,
        deletedByUser: false,
    },
    {
        userID: ["user1", "public"],
        receiptID: 2021070712347,
        itemName: "Chips",
        itemCategory: "Others",
        itemPrice: 5,
        itemPriceTotal: 10,
        itemQuantityAtUpload: 2,
        itemQuantityUpdatedByUser: 2,
        deletedByUser: false,
    },
    {
        userID: ["user1", "public"],
        receiptID: 2021070712348,
        itemName: "Spinach",
        itemCategory: "Others",
        itemPrice: 3,
        itemPriceTotal: 15,
        itemQuantityAtUpload: 5,
        itemQuantityUpdatedByUser: 5,
        deletedByUser: false,
    },
    {
        userID: ["user1", "public"],
        receiptID: 2021070712349,
        itemName: "Milk",
        itemCategory: "Others",
        itemPrice: 8,
        itemPriceTotal: 2,
        itemQuantityAtUpload: 4,
        itemQuantityUpdatedByUser: 4,
        deletedByUser: false,
    }
]
export const newdata = data.map(elem => {
    elem.slug = _.kebabCase(elem.itemName)
    return elem
})
