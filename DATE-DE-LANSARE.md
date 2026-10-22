# Listă de verificare înainte de lansarea comercială

## Produs
- [ ] Testează fiecare buton pe Android Chrome și pe cel puțin un alt browser.
- [ ] Testează adăugare/ștergere mașină, jurnal, planificator ulei, combustibil, raport și backup/restore.
- [ ] Verifică păstrarea datelor după închiderea și redeschiderea aplicației.
- [ ] Adaugă mesaje de eroare accesibile și confirmări pentru acțiunile distructive.

## Legal și suport
- [ ] Înlocuiește toate câmpurile [completează...] din documentele juridice.
- [ ] Publică o adresă de contact pentru suport.
- [ ] Verifică politica de confidențialitate și termenii pentru țările în care vinzi.
- [ ] Definește politica de rambursare/anulare dacă introduci abonamente.

## Comercializare
- [ ] Alege clar modelul: plată unică sau abonament. Nu le amesteca în interfață.
- [ ] Nu activezi Premium pe baza unei simple variabile locale în versiunea comercială.
- [ ] Implementează validarea tranzacțiilor pe platforma de plată și tratează restaurarea achizițiilor.
- [ ] Testează plățile în sandbox înainte de încasări reale.
- [ ] Nu folosi datele de test pentru a susține că există venituri sau clienți.

## Google Play
- [ ] Configurează aplicația Android și generează un Android App Bundle semnat.
- [ ] Creează produsul/abonamentul în Play Console și verifică integrarea Billing.
- [ ] Completează Data safety, clasificarea de conținut, iconul, capturile și descrierea.
- [ ] Respectă cerințele de testare pentru tipul de cont de dezvoltator.
- [ ] Publică politica de confidențialitate accesibilă printr-un URL public.

## Notă
Acest proiect este un MVP funcțional de bază, nu o aplicație comercială finalizată și nici un produs deja aprobat de Google Play. Nu încasa bani până când plățile și obligațiile legale nu sunt implementate și verificate.
