# Dashboard

- `/`
  - statystyki dzisiejszych zamówień (zdalne jak i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i haslo
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - kazdy wiersz = blok 30 minut
    - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów

- `/tables/booking/:id`
  - zawiera wszystkie informację dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmian

- `/tables/booking/new`
  - analogicznie do powyższej, bez początkowych informacji

- `/tables/events/:id`
  - analogicznie do powyższej, bez początkowych informacji

- `/tables/events/new`
  - analogicznie do powyższej, bez początkowych informacji

# Widok kelnera

- `/waiter`
  - tabela
    - w wierszach stoliki
    - w kolumnach różne rodzaje informacji (status stolika, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika (zmienić status, przejść do zamówienia itp)

- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwotę zamówienia

- `/waiter/order/:id`
  - jak powyższa

# Widok kuchni

- `/kitchen`
  - wyświetla listę zamówień w kolejności ich złożenia
  - lista musi zawierać:
    - numer stolika (lub zamównia zdalnego)
    - pełne informacje dotyczące zamówionych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane
