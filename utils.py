from operator import attrgetter
from textwrap import indent
from typing import Iterator

CURRENCY = " ₽"
ORANGE = (255, 165, 0)
BG = 12, 34, 56
FG_ORANGE = "\033[38;2;255;165;0m"
BG_BLUE = "\033[48;2;12;34;56m"
RESET = "\033[m"


def get(iterator, **kwargs):
    """Return the first object in iterator that has the correct values for each attribute name in kwargs."""
    getter = attrgetter(*kwargs.keys())
    values = tuple(kwargs.values())

    # attrgetter does not return a tuple in this case.
    if len(values) == 1:
        values = values[0]

    for obj in iterator:
        if getter(obj) == values:
            return obj


def all_subclasses(klass: type) -> Iterator[type]:
    """Yield all subclasses of a class."""
    for k in klass.__subclasses__():
        yield from all_subclasses(k)
    yield klass


def fmt(s, fg=None, bg=None, end=True):
    """
    Add ANSI escape codes to a string.

    [fg] and [bg] are a rgb tuple of integers.

    If [reset] is False, the colors and any ANSI flags are not cleared.
    """

    flags = ""
    if fg is not None:
        r, g, b = fg
        flags += f"38;2;{r};{g};{b};"

    if bg is not None:
        r, g, b = bg
        flags += f"48;2;{r};{g};{b};"

    flags = flags.strip(";")
    ending = "\033[m" if end else ""
    return f"\033[{flags}m{s}{ending}"


def fmt_money(amount):
    return fmt(str(amount) + CURRENCY, ORANGE)


def tree_str(iterable):
    # For future reference for printing tree.
    if not iterable:
        return ""

    BIFURC = "├── "
    LAST_BIFURC = "└── "

    out = ""
    for item in iterable[:-1]:
        s = indent(str(item), "│   ")
        out += BIFURC + s[4:]
    # add the last separately as we don't want the gutter
    out += LAST_BIFURC + indent(str(iterable[-1]), "    ")[4:]

    return out
