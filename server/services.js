module.exports = {

    getElementsDefinition: function () {

        return [
            {label: "Header"},
            {label: "Footer"},
            {label: "Image Element"},
            {label: "Title"},
            {label: "body"}
        ];

    },

    getElementsForMail: function () {
        return [
            {label: "Header-email", type:'header'},
            {label: "Footer-email", type:'footer'}
        ];

    }

};