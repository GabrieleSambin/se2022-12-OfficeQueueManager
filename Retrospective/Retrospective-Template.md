TEMPLATE FOR RETROSPECTIVE (Team 12)
=====================================

The retrospective should include _at least_ the following
sections:

- [process measures](#process-measures)
- [quality measures](#quality-measures)
- [general assessment](#assessment)

## PROCESS MEASURES 

### Macro statistics

- Number of stories committed vs. done **4 &rarr; 4** 
- Total points committed vs. done **14 &rarr; 14**
- Nr of hours planned vs. spent (as a team) **27 &rarr; 49**

**Remember** a story is done ONLY if it fits the Definition of Done:
 
- Unit Tests passing
- Code review completed
- Code present on VCS
- End-to-End tests performed

> Please refine your DoD if required (you cannot remove items!) 

### Detailed statistics

| Story  | # Tasks | Points | Hours est. | Hours actual |
|--------|---------|--------|------------|--------------|
| _#0_ Technical tasks  |      6   |        |   8         |      18.5        |
| _#1_ Client takes a ticket  | 4        |   3     |       8     |      18.5        |
| _#2_ Client alert |  2       |     3   |     1       |         1     |
| _#3_ Client knows the waiting time  |      3   |    3    |     7       |       6       |
| _#4_ Officer call the next client  |     3    |    5    |      5      |      6        |

> place technical tasks corresponding to story `#0` and leave out story points (not applicable in this case)

- Hours per task average, standard deviation (estimate and actual) **5.8 &rarr; 10**
- Total task estimation error ratio: sum of total hours estimation / sum of total hours spent - 1 **-0.42**

  
## QUALITY MEASURES 

- Unit Testing:
  - Total hours estimated **3**
  - Total hours spent **7**
  - Nr of automated unit test cases **2**
  - Coverage (if available) **0**
- E2E testing: (not considered)
  - Total hours estimated **0**
  - Total hours spent **0**
- Code review 
  - Total hours estimated **4**
  - Total hours spent **5.30**
  

## ASSESSMENT

- What caused your errors in estimation (if any)? 
    
      Errors on estimation were caused by the fact that we did not consider the tests and the code reviews associated with the stories.

      Moreover we did not consider the PERSON/HOURS in the estimation, but only the hours.
          
- What lessons did you learn (both positive and negative) in this sprint? 

      We learnt that organizing and splitting the work between 6 people it's not trivial! We should dedicate more time in planning and splitting correctly out work. We should also take into account personal skills of each one of us.

- Which improvement goals set in the previous retrospective were you able to achieve? 
      
      None, this is our first retrospective.
  
- Which ones you were not able to achieve? Why?

      None, this is our first retrospective.

- Improvement goals for the next sprint and how to achieve them (technical tasks, team coordination, etc.)

      We should write stories in a better way, meaning we should partition them in more independent (and therefore precise) tasks, because in this sprint stories overlapping happened more than once; and overlapping stories means overlapping code.

      We should also have more coordination, we should divide the tasks in client and server tasks, to avoid too many people working on the same file.

      We should have more consideration in terms of database agreement for it's use in the different tasks because we had to some changes on it which might introduce some errors. 

      Finally, as we mentioned on the lessons section we should dedicate more time in planning and splitting correctly out work taking into account personal skills of each one of use.

- One thing you are proud of as a Team!!

      We are a super cool team, no explainations needed!

      But ... We reached our goals and despite possible disagreements we always maintained respect <3