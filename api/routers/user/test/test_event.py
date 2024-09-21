import pytest
from fastapi.testclient import TestClient
from fastapi import HTTPException
from ..event import router

client = TestClient(router)

def test_init():
    response = client.get("/user/event/")
    assert response.status_code == 200
    assert response.json() == [{"item_id": "Foo"}]

def test_get_thumbnail():
    response = client.get("/user/event/thumbnail?amount=5")
    assert response.status_code == 200
    assert response.json() == [
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

def test_get_thumbnail_negative_amount():
    with pytest.raises(HTTPException) as excinfo:
        client.get("/user/event/thumbnail?amount=-1")
    assert excinfo.value.status_code == 400
    assert excinfo.value.detail == "Amount must be a positive integer"

def test_get_thumbnail_too_much_amount():
    with pytest.raises(HTTPException) as excinfo:
        client.get("/user/event/thumbnail?amount=100")
    assert excinfo.value.status_code == 400
    assert excinfo.value.detail == "Amount exceeds the number of events in the database"