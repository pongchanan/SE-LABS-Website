from fastapi import APIRouter, HTTPException
from ...pydantic.event import Event

router = APIRouter(
    prefix="/user/event",
    tags=["event"],
)

fake_db = [
    {
        "EID": "1",
        "title": "Annual Tech Conference",
        "description": "Join us for the biggest tech conference of the year, featuring keynotes from industry leaders and hands-on workshops.",
        "location": "San Francisco Convention Center",
        "start": "2024-09-15T09:00:00",
        "end": "2024-09-17T18:00:00"
    },
    {
        "EID": "2",
        "title": "Local Food Festival",
        "description": "Celebrate our city's culinary diversity with food stalls, cooking demonstrations, and live music.",
        "location": "Central Park",
        "start": "2024-07-20T11:00:00",
        "end": "2024-07-20T22:00:00"
    },
    {
        "EID": "3",
        "title": "Startup Pitch Night",
        "description": "Watch innovative startups pitch their ideas to a panel of venture capitalists and industry experts.",
        "location": "Downtown Innovation Hub",
        "start": "2024-11-05T18:30:00",
        "end": "2024-11-05T21:30:00"
    },
    {
        "EID": "4",
        "title": "Annual Charity Run",
        "description": "Join our 5K run to raise funds for local children's hospitals. All fitness levels welcome!",
        "location": "Riverside Park",
        "start": "2024-05-12T08:00:00",
        "end": "2024-05-12T12:00:00"
    },
    {
        "EID": "5",
        "title": "Art Gallery Opening Night",
        "description": "Be among the first to see the new exhibition 'Modern Perspectives' featuring works from emerging local artists.",
        "location": "City Art Museum",
        "start": "2024-03-01T19:00:00",
        "end": "2024-03-01T22:00:00"
    },
]


@router.get("/")
async def read_items():
    return [{"item_id": "Foo"}]

@router.get("/thumbnail", response_model=list[Event])
def get_thumbnail(amount: int, laboratory_id: int | None = None, research_id: int | None = None):
    if amount < 0:
        raise HTTPException(status_code=400, detail="Amount must be a positive integer")
    if amount > len(fake_db):
        raise HTTPException(status_code=400, detail="Amount exceeds the number of events in the database")

    if (laboratory_id is not None) and (research_id is not None):
        return filter(lambda x: x["laboratory_id"] == laboratory_id and x["research_id"] == research_id, fake_db)[:amount]
    elif laboratory_id is not None:
        return filter(lambda x: x["laboratory_id"] == laboratory_id, fake_db)[:amount]
    elif research_id is not None:
        return filter(lambda x: x["research_id"] == research_id, fake_db)[:amount]
    else:
        return fake_db[:amount]