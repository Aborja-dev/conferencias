# App Call for papers

# Descripción del problema

Roberto es el organizador del evento de charlas para acercar la astronomía a jóvenes más grande del país y necesita juntar speakers para el evento. Hoy Roberto y sus ayudantes llaman a las universidades y comunidades de astronomía para juntar personas que quieran dar a conocer un tema en específico sobre la astronomía, y juntan todo en un excel linkeando a word la explicación de cada propuesta que tienen.

## Especificaciones técnicas

Uno de los ayudantes de Roberto contacto a un amigo que es parte de la organización de FrontendCafé para pedirle si era posible general algún tipo de administrador de charlas. En la cual nos facilitó un listado de las tareas que realizaban y que necesitaban que tenga este administrador:

- Registrar la charla propuesta por una persona (Él cree que tranquilamente las personas interesadas pondrían llenar un formulario, pero por el momento ellos lo hacen)
- Visualizar las propuestas de cada persona, donde se puedan filtrar por temáticas y duración.
- Poder aprobar, desestimar y dar feedback de cada propuesta.
- Generar un calendario para el evento en base a las propuestas
- Cada persona que propuso una charla podrá tener la posibilidad de visualizar el estado y feedback de la propuesta.
- Soporte para diferentes eventos

## Modulos

- Formulario de carga de charla y dashboard para cada speaker para ver el resultado de su propuesta
- Dashboard para ver todas las charlas propuestas (posibilidad de verlas/aceptarlas/rechazarlas)
- Generación de calendario

[Historias de Usuario y Diagramas](https://www.notion.so/Historias-de-Usuario-y-Diagramas-5634c8f433944460bdda3c9529abfcf0?pvs=21)

## Consideraciones

- Formulario:
    - Datos básicos (nombre, mail)
    - Propuesta por escrito de la charla, más con la posibilidad de adjuntar archivos multimedia
    - Fechas y horarios disponibles para dar la charla (posibilidad de elegir los que mejor le queden al speaker, multiselect)
    - Disponibilidad de dar la charla via stream o presencial
- Dashboard para speaker:
    - Acceso via un código que se le enviará por mail, este código será por propuesta.
    - Ver la propuesta (sin posibilidad de edición)
    - Posibilidad de dejar comentarios por parte del speaker y del moderador
    - Ver el estado de la misma (si fue aceptada ver la fecha y lugar propuestos por les moderador)
- Dashboard de moderación
    - Posibilidad de crear un evento nuevo (definiendo fechas/horas para el call for papers y para el evento en sí, requisitos para los speakers, definir si el evento será presencial/online/hibrido, cupos de speakers)
    - Ver las charlas subidas por les speakers de manera anónima (solo se podrán ver los datos de contacto una vez aceptada la propuesta)
    - Posibilidad de ver comentarios del speaker
    - Posibilidad de dejar comentarios al speaker y de aprobación/rechazo
    - Generación del calendario del evento
    - Ver calendario general de los eventos que creo el administrador
    
    ## Documentación
    
    # Historias de Usuario y Diagramas

# Roles y Entidades

## Roles identificados

Los tres roles descritos a continuación pueden agruparse bajo un super-rol de Usuario, en el cual se engloban las

- Administrador — Un administrador es un usuario que tiene la posibilidad de visualizar todas las propuestas de charlas enviadas por los candidatos y transformar las propuestas en charlas confirmadas dentro de un evento.
- Candidato — Un candidato es un usuario que propone una o más charlas en un evento. Un candidato es autor de una o más propuestas de charlas

## Entidades identificadas

- Evento — Event
    - Tipo de Evento — EventType
- Organizador — Organizer
- Candidato — Candidate
- Propuesta de Charla - TalkProposal
    - Tema - Topic
    - Status - ProposalStatus

## Diagrama de clases

[Visual Paradigm Online](https://online.visual-paradigm.com/share.jsp?id=323130323237362d31#diagram:workspace=epouuemy&proj=0&id=1)

## Tarjetas CRC

[CRC Card Maker](https://echeung.me/crcmaker/?share=W3sibmFtZSI6IkV2ZW50Iiwic3VwZXJjbGFzc2VzIjoiIiwic3ViY2xhc3NlcyI6IiIsInR5cGUiOjEsInJlc3BvbnNpYmlsaXRpZXMiOlsiIl0sImNvbGxhYm9yYXRvcnMiOlsiIl19LHsibmFtZSI6IkV2ZW50VHlwZSIsInN1cGVyY2xhc3NlcyI6IiIsInN1YmNsYXNzZXMiOiIiLCJ0eXBlIjoxLCJyZXNwb25zaWJpbGl0aWVzIjpbIiJdLCJjb2xsYWJvcmF0b3JzIjpbIiJdfSx7Im5hbWUiOiJBZG1pbiIsInN1cGVyY2xhc3NlcyI6IiIsInN1YmNsYXNzZXMiOiIiLCJ0eXBlIjoxLCJyZXNwb25zaWJpbGl0aWVzIjpbIiJdLCJjb2xsYWJvcmF0b3JzIjpbIiJdfSx7Im5hbWUiOiJUYWxrIiwic3VwZXJjbGFzc2VzIjoiIiwic3ViY2xhc3NlcyI6IiIsInR5cGUiOjEsInJlc3BvbnNpYmlsaXRpZXMiOlsiIl0sImNvbGxhYm9yYXRvcnMiOlsiIl19LHsibmFtZSI6IlByb3Bvc2FsIiwic3VwZXJjbGFzc2VzIjoiVGFsayIsInN1YmNsYXNzZXMiOiIiLCJ0eXBlIjoxLCJyZXNwb25zaWJpbGl0aWVzIjpbIiJdLCJjb2xsYWJvcmF0b3JzIjpbIiJdfSx7Im5hbWUiOiJDYW5kaWRhdGUiLCJzdXBlcmNsYXNzZXMiOiIiLCJzdWJjbGFzc2VzIjoiIiwidHlwZSI6MSwicmVzcG9uc2liaWxpdGllcyI6WyIiXSwiY29sbGFib3JhdG9ycyI6WyIiXX1d)

# Historias de Usuario

## Para Usuario

- Como usuario, deseo poder ingresar al sistema utilizando mis credenciales, para interactuar con las funcionalidades del sistema, tanto en el rol de Candidato como en el rol de Organizador.

## Para Candidato

- Como Candidato, deseo poder registrarme en el sistema utilizando mi email, a fin de acceder a las funcionalidades del sistema.
- Como Candidato, deseo poder visualizar la información general de un Evento, a fin de tener conocimiento del mismo y poder acceder a enviar una postulación si lo deseo.
- Como Candidato, deseo poder visualizar la información de todas las propuestas que he enviado en el sistema, a fin de tener una manera de informarme rápidamente del estado de mis propuestas.
- Como Candidato, deseo poder visualizar un formulario de ingreso de propuestas, a fin de elevar una propuesta de charla para un evento.
- Como Candidato, deseo poder evaluar el estado en detalle de mi Propuesta, para ver si la charla parte de la propuesta formará parte de un evento.
- Como Candidato, deseo poder visualizar el feedback de los organizadores sobre mi propuesta, a fin de informarme respecto de las razones de la decisión de la organización en la aceptación o no de mi Propuesta.

## Para Organizador

- Como Organizador, deseo poder crear un Evento con sus detalles, a fin de publicarlo para que posibles candidatos envíen sus propuestas de charlas.
- Como Organizador, deseo poder visualizar la lista de Eventos que he creado, a fin de gestionarlos en detalle y acceder desde ella a la vista en detalle de un evento.
- Como Organizador, deseo poder visualizar una colección de propuestas de charlas enviadas para un Evento, organizadas cronológicamente de más antiguas a más nuevas, a fin de acceder a la vista en detalle de cada una de ellas.
- Como Organizador, deseo poder cambiar el estado de una charla determinada, a fin de tomar en consideración cuáles serán aceptadas o rechazadas para formar parte de un evento.
- Como Organizador, deseo filtrar la lista de propuestas enviadas según su estado, a fin de determinar cuáles propuestas aún no han sido analizadas, cuáles están en revisión y cuáles han sido aceptadas o rechazadas.
- Como Organizador, deseo poder enviar feedback a los Candidatos, a fin de entregar un mensaje haciendo saber el resultado de la selección o no de una determinada propuesta.

## Consideraciones

- Duración de la charla será una lista estática en el MVP.
- Temática de charlas será una lista estática en el MVP.