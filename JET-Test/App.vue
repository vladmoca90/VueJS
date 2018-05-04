<template>
    <div id="app">
        <tableComp />
    </div>
</template>
<script>
    import tableComp from 'tableComp.vue'

    export default {
        name: 'app',
        components: {
            tableComp,
        },
        data() {
            {
                "d": {
                    "__type": "eventdata.co.uk.APIMasterPersonPreference+PreferenceAPIResponseJSON",
                    "Preferences": [{
                            "__type": "eventdata.co.uk.PreferenceJSON",
                            "ControllerCode": "TEST1",
                            "PreferenceCode": "Root",
                            "Name": "My Data Controller",
                            "Description": "Would you like to hear from My Data Controller (*)?",
                            "Status": "Active"
                        },
                        {
                            "__type": "eventdata.co.uk.PreferenceJSON",
                            "ControllerCode": "TEST1",
                            "PreferenceCode": "Root.Conferences",
                            "Name": "Conferences",
                            "Description": "Would you like to hear periodic updates about our conferences (*)?",
                            "Status": "Active"
                        },
                        {
                            "__type": "eventdata.co.uk.PreferenceJSON",
                            "ControllerCode": "TEST1",
                            "PreferenceCode": "Root.Delete",
                            "Name": "don't delete me",
                            "Description": "don't delete me... (*)",
                            "Status": "Hidden"
                        },
                        {
                            "__type": "eventdata.co.uk.PreferenceJSON",
                            "ControllerCode": "TEST1",
                            "PreferenceCode": "Root.Events",
                            "Name": "Events",
                            "Description": "Do you want to read more about Events (*)?",
                            "Status": "Active"
                        },
                        {
                            "__type": "eventdata.co.uk.PreferenceJSON",
                            "ControllerCode": "TEST1",
                            "PreferenceCode": "Root.Exhibitions",
                            "Name": "Exhibitions",
                            "Description": "Would you like to hear periodic updates on our exhibitions (*)?",
                            "Status": "Active"
                        },
                        {
                            "__type": "eventdata.co.uk.PreferenceJSON",
                            "ControllerCode": "TEST1",
                            "PreferenceCode": "Root.Exhibitions.HealthCare",
                            "Name": "Heath Care",
                            "Description": "Would you like to hear periodic updates about our Health Care exhibition  (*)?",
                            "Status": "Active"
                        },
                        {
                            "__type": "eventdata.co.uk.PreferenceJSON",
                            "ControllerCode": "TEST1",
                            "PreferenceCode": "Root.Exhibitions.HealthCare.3rdPartyPartnerCommLtd",
                            "Name": "3rd Party - Partner Comm Ltd.",
                            "Description": "Is it OK to share information with Partner Comm Ltd. to hear about their service  (*)?",
                            "Status": "Active"
                        },
                        {
                            "__type": "eventdata.co.uk.PreferenceJSON",
                            "ControllerCode": "TEST1",
                            "PreferenceCode": "Root.Exhibitions.Training",
                            "Name": "Training",
                            "Description": "Would you like to hear about training?",
                            "Status": "Active"
                        }
                    ],
                    "Result": "success",
                    "Message": "Loaded"
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>