// The function takes a year from first to current and returns the corresponding century
            function centuryCheck(year) {
                var minYear = 1;
                var maxYear = new Date().getFullYear();
                var error = "Год указан не правильно";
                if (!isNaN(parseInt(year))) {
                    if (year >= minYear && year <= maxYear) {
                        return  Math.ceil(year / 100);
                    }
                }
                return error;
            }
