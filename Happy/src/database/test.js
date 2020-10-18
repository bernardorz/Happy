const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db =>{
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: '-23.0942379',
        lng: '-48.9304969',
        name: "RAFA",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: '14996868848',
        images: [
            'https://images.unsplash.com/photo-1562790519-60c4307f025f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
            'https://images.unsplash.com/photo-1567701554261-fcc4bda64847?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
        ].toString(),
        instructions:'Venha como se sentir a vontade e traga muito amor e paciência para dar. ',
        opening_hours: 'Horário de visitas das 18h até 8h ',
        open_on_weekends: '0'
    });
    //consultar dados da tabela
    const selectedOrphanages = await db.all('SELECT * FROM orphanages');
    console.log(selectedOrphanages);

    // consultar somente um orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
    console.log(orphanage[1]);
    // deletar dado da tabela
    // console.log(await db.run('DELETE FROM orphanages WHERE id="3"'));
    // console.log(await db.run('DELETE FROM orphanages WHERE id="4"'));
});