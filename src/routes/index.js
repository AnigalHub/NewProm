export  default [
    {
        path: "/",
        name: "LandingPage",
        component: () => import("./../components/LandingPage.vue")
    },
    {
        path: '/company',
        name: 'Company',
        component: () => import("./../components/company.vue")
    },
    {
        path: '/laboratory',
        name: 'Laboratory',
        component: () => import("./../components/laboratory.vue")
    },
    {
        path: '/vhodnoi_control',
        name: 'Vhodnoi_control',
        component: () => import("./../components/services_laboratory/vhodnoi_control.vue")
    },
    {
        path: '/dop_trials',
        name: 'Dop_trials',
        component: () => import("./../components/services_laboratory/dop_trials.vue")
    },
    {
        path: '/climatic_trials',
        name: 'Climatic_trials',
        component: () => import("./../components/services_laboratory/climatic_trials.vue")
    },
    {
        path: '/mehanic_trials',
        name: 'Mehanic_trials',
        component: () => import("./../components/services_laboratory/mehanic_trials.vue")
    },
    {
        path: '/supply',
        name: 'Supply',
        component: () => import("./../components/supply.vue")
    },
    {
        path: '/pcb_materials',
        name: 'PCB_materials',
        component: () => import("./../components/supply/pcb_materials.vue")
    },
    {
        path: '/manufacturers',
        name: 'Manufacturers',
        component: () => import("../components/supply/manufacturers.vue")
    },
    {
        path: '/program',
        name: 'Program',
        component: () => import("../components/supply/program.vue")
    },
    {
        path: '/selection_and_supply_it',
        name: 'Selection_and_supply_it',
        component: () => import("../components/selection_and_supply_it.vue")
    },
    {
        path: '/equipment',
        name: 'Equipment',
        component: () => import("../components/it-resheniy/equipment.vue")
    },
    {
        path: '/guarantee',
        name: 'Guarantee',
        component: () => import("../components/it-resheniy/guarantee.vue")
    },
    {
        path: '/smk',
        name: 'Smk',
        component: () => import("./../components/smk.vue")
    },
    {
        path: '/use_smk',
        name: 'Use_smk',
        component: () => import("./../components/smk/use_smk.vue")
    },
    {
        path: '/events_smk',
        name: 'Events_smk',
        component: () => import("./../components/smk/events_smk.vue")
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: () => import("./../components/contacts.vue")
    },
    {
        path: '/example',
        name: 'Example',
        component: () => import("./../components/example.vue")
    },
]