from datetime import datetime
from pydantic import BaseModel

class Event(BaseModel):
    EID: str
    title: str
    description: str | None = None
    location: str
    start: datetime
    end: datetime