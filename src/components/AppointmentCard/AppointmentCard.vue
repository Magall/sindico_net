<template>
    <div id="appointment" class="container">

        <ul>
            <li><span>Espaço:</span> {{area}}</li>
            <li><span>Data:</span> {{date}}</li>
            <li><span>Responsável:</span> {{responsible}}</li>
            <li><span>Apartamento:</span> {{apartament}}</li>

        </ul>
    </div>
</template>
<script>
export default {
    name:"AppointmentCard",
    props:["area","date","responsible","apartament"]
}
</script>
<style lang="scss" scoped>
    @import "./AppointmentCard.scss";
</style>